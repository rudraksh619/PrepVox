import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
const Agent = ({ userName }: AgentProps) => {
  const isSpeeking = true;

  enum CallStatus {
    INACTIVE = "INACTIVE",
    ACTIVE = "ACTIVE",
    CONNECTING = "CONNECTING",
    FINISHED = "FINISHED",
  }

  const callStatus = CallStatus.INACTIVE;

  //    transcript of our message

  const message = ["whats your name", "My Name Is Rudraksh"];

  const last_Message = message[message.length - 1];

  return (
    <>
      <div className="call-view">
        {/*  interviewr card */}

        <div className="card-interviewer">
          <div className="avatar">
            <Image
              src="/ai-avatar.png"
              alt=" voice agent "
              width={65}
              height={54}
              className="object-cover"
            />

            {isSpeeking && <span className="animate-speak"></span>}
          </div>
          <h3>Ai Interviewer</h3>
        </div>

        {/* user card */}

        <div className="card-border">
          <div className="card-content">
            <Image
              src="/user-avatar.png"
              alt="user avatar"
              width={540}
              height={540}
              className="rounded-full object-cover size-[120px]"
            />

            <h3>{userName}</h3>
          </div>
        </div>
      </div>

      {message.length > 0 && (
        <div className="transcript-border m-3 align-center">
            <div className="transcript">
                <p
                key={last_Message}
                className= {cn('transition-opacity duration-500  opacity-0' , 'animate-fadeIn opacity-100' )}
                >{last_Message}</p>
            </div>
        </div>
      )}

      <div className="flex justify-center w-full mt-5">
        {callStatus !== "ACTIVE" ? (
          <button className="btn-call relative">
            <span
              className={cn(
                "absolute animate-ping rounded-full opacity-75",
                (callStatus === "CONNECTING") & "hidden"
              )}
            />

            <span>
              {callStatus === "INACTIVE" || callStatus === "FINISHED"
                ? "call"
                : ". . . "}
            </span>
          </button>
        ) : (
          <button className="btn-disconnect">End</button>
        )}
      </div>
    </>
  );
};

export default Agent;
