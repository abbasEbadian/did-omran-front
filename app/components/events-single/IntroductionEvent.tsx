
function IntroductionEvent({ text }: { text: string }) {
    return (
        <>
            <div
                className="flex flex-col lg:items-start items-center gap-4 lg:px-0 px-4"
                dangerouslySetInnerHTML={{ __html: text }}
            ></div>
        </>
    );
}

export default IntroductionEvent;
