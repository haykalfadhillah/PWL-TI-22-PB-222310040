import moment from "moment";
import React from "react";
export default function ChatBody({ data }) {
    const listdata = data;
    return (
        <div className="chat-items">
            {listdata.map((v, index) => (
                <div className="chat-item"
                    style={styleChatItems.chatBubleItems}
                    key={index}>
                    <div className="chat text-white rounded my-2 p-2"
                        style={styleChatItems.chatBubleSender}>
                        <span className="me-3">{v.message}</span>
                        <span className="chat-date"
                            style={{ fontSize: "11px" }}>
                            {moment(v.date).format("HH:mm")}
                        </span>
                    </div>
                </div>
            ))}
        </div>
    );
}