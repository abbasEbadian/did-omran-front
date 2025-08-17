export const IconUser = ({ className="", fill="currentColor" }: {className?: string; fill?: string }) => {
    return (
        <span className={className}>
           <svg width="25" height="24" viewBox="0 0 25 24" fill={fill}  xmlns="http://www.w3.org/2000/svg">
            <path d="M18 21.0001H7C5.61929 21.0001 4.5 19.8808 4.5 18.5001C4.5 14.4194 10.5 14.5001 12.5 14.5001C14.5 14.5001 20.5 14.4194 20.5 18.5001C20.5 19.8808 19.3807 21.0001 18 21.0001Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M12.5 11C14.7091 11 16.5 9.20914 16.5 7C16.5 4.79086 14.7091 3 12.5 3C10.2909 3 8.5 4.79086 8.5 7C8.5 9.20914 10.2909 11 12.5 11Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        </span>
    );
};