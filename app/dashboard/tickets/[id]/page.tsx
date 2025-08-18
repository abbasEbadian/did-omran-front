"use client";

import {getTicket} from "@/api/ticket/get";
import {TicketType} from "@/api/ticket/types";
import {closeTicket, sendTicketMessage} from "@/api/ticket/update";
import Modal from "@/app/components/Modal";
import TicketStatusBadge from "@/app/components/tickets/TicketStatusBadge";
import {cn} from "@/utils/cn";
import Image from "next/image";
import Link from "next/link";
import {redirect, useParams} from "next/navigation";
import {useState} from "react";
import {MoonLoader, SyncLoader} from "react-spinners";
import {toast} from "react-toastify";
import useSWR, {useSWRConfig} from "swr";

function Page() {
    const { mutate } = useSWRConfig();
    const { id } = useParams();
    const { data: ticket, isLoading } = useSWR<TicketType>(
        "get-ticket-" + id,
        () => getTicket(Number(id) ?? 0)
    );
    const [closing, setClosing] = useState(false);
    const [sending, setSending] = useState(false);
    const [wantToClose, setWantToClose] = useState(false);
    const [message, setMessage] = useState("");

    if (!isLoading && !ticket) {
        redirect("/dashboard/tickets");
    }
    const onCloseTicket = async () => {
        if (!ticket) return;
        setClosing(true);
        closeTicket(ticket.id)
            .then((response) => {
                console.log("onCloseTicket", { response });
                if (response.result === "fail") {
                    throw new Error(response.message);
                }
                toast.success("با موفقیت بسته شد");
                setWantToClose(false);
                mutate("get-ticket");
            })
            .catch((error) => {
                console.log(error)
                toast.error("خطا در بستن تیکت");
            })
            .finally(() => setClosing(false));
    };

    const onSendMessage = async () => {
        if (!message || !ticket) return;
        setSending(true);
        sendTicketMessage({ id: ticket.id, message })
            .then((response) => {
                console.log("onSendMessage", { response });
                if (response.result === "fail") {
                    throw new Error(response.message);
                }
                toast.success("با موفقیت ثبت شد");
                mutate("get-ticket");
                setMessage("");
            })
            .catch((error) => {
                toast.error("خطا در ارسال");
            })
            .finally(() => setSending(false));
    };
    if (isLoading) {
        return (
            <div className="w-full h-full flex grid place-items-center">
                <MoonLoader />
            </div>
        );
    }

    return (
        <>
            <div className="flex items-center justify-between border-b-2 border-dashed border-b-secondary800 pb-3 select-none">
                <div className="flex items-center gap-1">
                    <Image
                        src={"/icons/message-square-lines.svg"}
                        alt="BsFacebook Img"
                        height={24}
                        width={24}
                    />
                    <span className="text-secondary900 text-sm">
                        موضوع تیکت:
                    </span>
                    <h2 className="text-lg font-semibold text-did">
                        {ticket?.title}
                    </h2>
                </div>
                {ticket?.status && (
                    <TicketStatusBadge
                        status={ticket.status}
                        className="ms-auto me-2"
                    />
                )}
                {ticket?.status !== "CLOSED" ? (
                    <div>
                        <button
                            className={cn(
                                "bg-blue px-2 py-1 text-xs rounded-lg w-20 border border-blue800 text-white text-nowrap"
                            )}
                            onClick={(e) => setWantToClose(true)}
                        >
                            <span>بستن تیکت</span>
                        </button>
                    </div>
                ) : null}
                <Link
                    href="/dashboard/tickets"
                    className="border border-did text-did px-2 py-1 text-xs rounded-lg ms-2"
                >
                    بازگشت
                </Link>
            </div>
            <div className="p-4 h-96 overflow-y-auto">
                {ticket?.messages.map((message) => {
                    return (
                        <ChatBubble
                            key={message.id}
                            id={message.id}
                            message={message.text}
                            author={message.user ?? ""}
                            sender={message.from_support}
                            time={new Date(
                                message.create_date
                            ).toLocaleTimeString("fa")}
                            file={message.file}
                        />
                    );
                })}
            </div>
            {ticket?.status !== "CLOSED" && (
                <div className="border-t p-4">
                    <div className="flex gap-2">
                        <input
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            type="text"
                            placeholder="پیام خود را بنویسید..."
                            className="flex-1 p-2 border rounded-lg focus:outline-none text-dark focus:border-blue-500"
                        />
                        <button
                            className={cn(
                                "bg-did text-white px-4 py-2 rounded-lg hover:bg-did900 flex"
                            )}
                            onClick={onSendMessage}
                        >
                            {sending ? (
                                <SyncLoader
                                    margin={4}
                                    size={6}
                                    speedMultiplier={0.5}
                                    color="white"
                                />
                            ) : (
                                <>
                                    ارسال
                                    <Image
                                        src={"/icons/send-2.svg"}
                                        alt="BsFacebook Img"
                                        height={24}
                                        width={24}
                                    />
                                </>
                            )}
                        </button>
                    </div>
                </div>
            )}
            <Modal open={wantToClose} onClose={() => setWantToClose(false)}>
                <div className="flex flex-col justify-between h-full">
                    <p className="text-did">آیا از بستن تیکت مطمئن هستید ؟</p>
                    <br />
                    <button
                        className={cn(
                            "border text-red-500 px-2 py-1 rounded",
                            closing && "opacity-50"
                        )}
                        onClick={onCloseTicket}
                    >
                        {closing ? (
                            <SyncLoader
                                margin={4}
                                size={6}
                                speedMultiplier={0.5}
                                color="red"
                            />
                        ) : (
                            <span>بله، می‌بندم</span>
                        )}
                    </button>
                </div>
            </Modal>
        </>
    );
}

export default Page;

type ChatBubbleProps = {
    id: number;
    message: string;
    time: string;
    sender: boolean;
    author: string;
    file?: string;
};

const ChatBubble: React.FC<ChatBubbleProps> = ({
    message,
    time,
    sender,
    author,
    file,
}) => {
    return (
        <div
            className={`mb-4 flex ${sender ? "justify-end" : "justify-start"}`}
        >
            <div
                className={`px-6 pb-3 pt-4 rounded-t-3xl ${
                    sender
                        ? "rounded-br-3xl bg-secondary600"
                        : "rounded-bl-3xl bg-did text-white"
                }`}
            >
                {file && <Image src={file} alt="image" width={1000} height={1000} className="w-full h-[180px]"/>}
                <p
                    className={`text-sm ${
                        sender ? "text-secondary" : "text-white"
                    }`}
                >
                    {message}
                </p>

                <div
                    className={`flex items-center gap-1 mt-2 ${
                        sender ? "justify-end" : "justify-start"
                    }`}
                >
                    <span
                        className={`text-xs ${
                            sender
                                ? "text-did/80 text-end"
                                : "text-secondary600"
                        }`}
                    >
                        {author} - {time}
                    </span>
                    {/* <Image src={icon} alt="Chat Icon" height={8} width={8} /> */}
                </div>
            </div>
        </div>
    );
};
