import React from 'react';


type Component = {
    height: number;
    width: number;
    strokeWidth?: number | 'none';
    fillColor?: string;
    strokeColor?: string;
    rotate?: number;
    className?: string;
};


export const Check = ({ height, width, strokeColor, strokeWidth, fillColor, }: Component) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 24 24" fill={fillColor || "none"} xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z" stroke={strokeColor || "black"} stroke-width={strokeWidth || "1.5"} stroke-miterlimit="10" />
                <path d="M16.5 8.25L10.2 15.75L7.5 12.75" stroke={strokeColor || "black"} stroke-width={strokeWidth || "1.5"} stroke-linecap="round" stroke-linejoin="round" />
            </svg>

        </>
    );
};
export const Close = ({ height, width, strokeColor, strokeWidth, fillColor, }: Component) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 24 24" fill={fillColor || "none"} xmlns="http://www.w3.org/2000/svg">
                <path d="M21 12C21 7.03125 16.9688 3 12 3C7.03125 3 3 7.03125 3 12C3 16.9688 7.03125 21 12 21C16.9688 21 21 16.9688 21 12Z" stroke={strokeColor || "black"} stroke-width="1.5" stroke-miterlimit="10" />
                <path d="M15 15L9 9M9 15L15 9" stroke={strokeColor || "black"} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>


        </>
    );
};
export const Dropdown = ({ height, width, strokeColor, strokeWidth, fillColor, rotate }: Component) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ rotate: `${rotate}deg` }}>
                <path d="M19.3884 15.1062L19.3884 15.1063C20.0026 15.8209 19.4949 16.9247 18.554 16.9247H5.44777C4.50687 16.9247 3.99921 15.8209 4.6115 15.1062L11.1637 7.46C11.2671 7.33938 11.3954 7.24256 11.5397 7.17619C11.6841 7.10981 11.8411 7.07544 12 7.07544C12.1588 7.07544 12.3158 7.10981 12.4602 7.17619C12.6045 7.24256 12.7328 7.33938 12.8362 7.45999L19.3884 15.1062Z" fill={fillColor || "black"} stroke={strokeColor || "none"} stroke-width="0.046875" />
            </svg>


        </>
    );
};
export const Heart = ({ height, width, strokeColor, strokeWidth, fillColor }: Component) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 20 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.16901 17.7195L9.16896 17.7195C5.48677 15.2199 3.89332 13.5067 3.015 12.4365C1.1429 10.1549 0.247731 7.81402 0.27298 5.27977C0.302387 2.38068 2.62823 0.0234375 5.45642 0.0234375C7.51307 0.0234375 8.93825 1.18181 9.76943 2.14856L9.76951 2.14865C9.79811 2.18158 9.83345 2.20799 9.87313 2.22608C9.91282 2.24418 9.95593 2.25355 9.99954 2.25355C10.0432 2.25355 10.0863 2.24418 10.126 2.22608C10.1656 2.20799 10.201 2.18158 10.2296 2.14865L10.2297 2.14855C11.0608 1.18088 12.486 0.0234375 14.5427 0.0234375C17.3709 0.0234375 19.6967 2.38068 19.7261 5.28024C19.7514 7.81495 18.8553 10.1558 16.9841 12.437C16.1058 13.5072 14.5123 15.2204 10.8301 17.72L10.8301 17.72C10.5853 17.8869 10.2959 17.9763 9.99953 17.9766C9.70316 17.9762 9.41378 17.8866 9.16901 17.7195ZM10.2119 2.13328C11.0453 1.16297 12.4764 0 14.5427 0C17.3842 0 19.72 2.36812 19.7495 5.28C19.7749 7.82109 18.8763 10.1672 17.0022 12.4519C16.1224 13.5239 14.5272 15.2386 10.8433 17.7394C10.5946 17.9089 10.3006 17.9998 9.99954 18L10.2119 2.13328Z" fill={fillColor || 'red'} stroke={strokeColor || 'red'} stroke-width="0.046875" />
            </svg>
        </>
    );
};
export const Profile = ({ height, width, strokeColor, strokeWidth, fillColor, }: Component) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16.1246 6.75C15.9408 9.22828 14.0621 11.25 11.9995 11.25C9.93705 11.25 8.05502 9.22875 7.87455 6.75C7.68705 4.17188 9.51517 2.25 11.9995 2.25C14.4839 2.25 16.3121 4.21875 16.1246 6.75Z" stroke={strokeColor || 'none'} fill={fillColor || 'black'} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M12 14.25C7.92187 14.25 3.78281 16.5 3.01687 20.7469C2.92453 21.2588 3.21422 21.75 3.75 21.75H20.25C20.7862 21.75 21.0759 21.2588 20.9836 20.7469C20.2172 16.5 16.0781 14.25 12 14.25Z" stroke={strokeColor || 'none'} fill={fillColor || 'black'} stroke-width="1.5" stroke-miterlimit="10" />
            </svg>

        </>
    );
};
export const Search = ({ height, width, strokeColor, strokeWidth, }: Component) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.3636 3C8.90722 3 7.48354 3.43187 6.2726 4.24099C5.06167 5.05011 4.11786 6.20015 3.56052 7.54567C3.00319 8.89119 2.85737 10.3718 3.14149 11.8002C3.42562 13.2286 4.12693 14.5406 5.15675 15.5704C6.18657 16.6003 7.49863 17.3016 8.92703 17.5857C10.3554 17.8698 11.836 17.724 13.1815 17.1667C14.527 16.6093 15.6771 15.6655 16.4862 14.4546C17.2953 13.2437 17.7272 11.82 17.7272 10.3636C17.7271 8.41069 16.9512 6.5378 15.5703 5.15688C14.1894 3.77597 12.3165 3.00012 10.3636 3V3Z" stroke={strokeColor || 'black'} stroke-width={strokeWidth || "1.5"} stroke-miterlimit="10" />
                <path d="M15.8573 15.8574L21 21.0001" stroke={strokeColor || 'black'} stroke-width={strokeWidth || "1.5"} stroke-miterlimit="10" stroke-linecap="round" />
            </svg>


        </>
    );
};
export const Star = ({ height, width, strokeColor, strokeWidth, fillColor }: Component) => {
    return (
        <>
            <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M22.5 9.75H14.4375L12 2.25L9.5625 9.75H1.5L8.0625 14.25L5.53125 21.75L12 17.0625L18.4688 21.75L15.9375 14.25L22.5 9.75Z" stroke={strokeColor || 'black'} stroke-width={strokeWidth || "1.5"} stroke-linejoin="round" fill={fillColor || 'black'} />
            </svg>
        </>
    );
};
export const Hamburger = ({ height, width, strokeColor, strokeWidth, fillColor, className }: Component) => {
    return (
        <div className={className}>
            <svg width={width} height={height} viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 0.75C0 0.551088 0.0790175 0.360322 0.21967 0.21967C0.360322 0.0790175 0.551088 0 0.75 0H15.25C15.4489 0 15.6397 0.0790175 15.7803 0.21967C15.921 0.360322 16 0.551088 16 0.75C16 0.948912 15.921 1.13968 15.7803 1.28033C15.6397 1.42098 15.4489 1.5 15.25 1.5H0.75C0.551088 1.5 0.360322 1.42098 0.21967 1.28033C0.0790175 1.13968 0 0.948912 0 0.75ZM0 6C0 5.80109 0.0790175 5.61032 0.21967 5.46967C0.360322 5.32902 0.551088 5.25 0.75 5.25H15.25C15.4489 5.25 15.6397 5.32902 15.7803 5.46967C15.921 5.61032 16 5.80109 16 6C16 6.19891 15.921 6.38968 15.7803 6.53033C15.6397 6.67098 15.4489 6.75 15.25 6.75H0.75C0.551088 6.75 0.360322 6.67098 0.21967 6.53033C0.0790175 6.38968 0 6.19891 0 6ZM0 11.25C0 11.0511 0.0790175 10.8603 0.21967 10.7197C0.360322 10.579 0.551088 10.5 0.75 10.5H15.25C15.4489 10.5 15.6397 10.579 15.7803 10.7197C15.921 10.8603 16 11.0511 16 11.25C16 11.4489 15.921 11.6397 15.7803 11.7803C15.6397 11.921 15.4489 12 15.25 12H0.75C0.551088 12 0.360322 11.921 0.21967 11.7803C0.0790175 11.6397 0 11.4489 0 11.25Z" fill="black" />
            </svg>

        </div>
    );
};
