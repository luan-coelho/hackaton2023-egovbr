import React from "react";

type NoDataProps = {
    children: React.ReactNode;
};

export function NoData({children}: NoDataProps) {
    return <>
        <div className="w-full border-2 rounded border-dashed p-2 w-full font-medium text-center">
            {children}
        </div>
    </>
}
