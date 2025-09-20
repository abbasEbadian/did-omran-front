import React from "react";
import AddComments from "./AddComments";
import UserComments from "./UserComments";

function Comments() {
    return (
        <>
            <div className="bg-secondary700/25 lg:py-24 py-10 lg:mb-32 mb-10">
                <div className="container mx-auto">
                    <div className="grid grid-cols-1 gap-16">
                        {/*<div className="lg:col-span-1 col-span-2 lg:order-1 order-2">*/}
                        {/*    <AddComments />*/}
                        {/*</div>*/}
                        <div className="lg:col-span-1 col-span-2 lg:order-2 order-1">
                            <UserComments />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Comments;
