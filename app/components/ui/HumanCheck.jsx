"use client";

import { useState, useEffect } from "react";

function createChallenge() {
  const left = Math.floor(Math.random() * 7) + 2;
  const right = Math.floor(Math.random() * 7) + 2;

  return {
    left,
    right,
    answer: String(left + right),
  };
}

export default function HumanCheck({ value, onChange, error }) {
  const [challenge, setChallenge] = useState(null);
  const [draft, setDraft] = useState("");
  const [localError, setLocalError] = useState("");

  // Hydration fix: Generate initial challenge only on the client.
  useEffect(() => {
    setChallenge(createChallenge());
  }, []);

  const resetChallenge = () => {
    setChallenge(createChallenge());
    setDraft("");
    setLocalError("");
    onChange(false);
  };

  const verify = () => {
    if (draft.trim() === challenge.answer) {
      onChange(true);
      setLocalError("");
      return;
    }

    setLocalError("Verification failed. Try the new prompt.");
    setChallenge(createChallenge());
    setDraft("");
    onChange(false);
  };

  const displayError = error || localError;

  return (
    <>
      <div className="border border-[#d9d9d9] bg-white px-4 py-3">
        <div className="flex min-h-[48px] items-center gap-4">
          <div
            className={`flex h-[28px] w-[28px] items-center justify-center border ${
              value ? "border-black bg-black text-white" : "border-black bg-white text-transparent"
            }`}
            aria-hidden="true"
          >
            <span className="text-[18px] leading-none">✓</span>
          </div>

          <div className="min-w-0">
            <p className="font-sans text-[16px] text-black">
              {value ? "Verification complete" : "I'm not a robot"}
            </p>
            <p className="font-sans text-[11px] text-[#7a7a7a]">
              {value ? "Human verification passed" : "Solve the prompt to continue"}
            </p>
          </div>

          <div className="ml-auto flex items-center gap-2">
            {value ? (
              <button
                type="button"
                onClick={resetChallenge}
                className="h-[34px] rounded-[4px] border border-black px-3 font-sans text-[12px] text-black"
              >
                Reset
              </button>
            ) : challenge ? (
              <>
                <span className="font-sans text-[13px] whitespace-nowrap text-black">
                  {challenge.left} + {challenge.right} =
                </span>
                <input
                  type="text"
                  inputMode="numeric"
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  onKeyDown={(event) => {
                    if (event.key === "Enter") {
                      event.preventDefault();
                      verify();
                    }
                  }}
                  className="h-[34px] w-[44px] border border-black bg-white px-2 text-center font-sans text-[14px] text-black outline-none"
                  aria-label="Human verification answer"
                />
                <button
                  type="button"
                  onClick={verify}
                  className="h-[34px] rounded-[4px] bg-black px-3 font-sans text-[12px] text-white"
                >
                  Verify
                </button>
              </>
            ) : (
              <div className="h-[34px] w-[130px] animate-pulse bg-gray-50 rounded" />
            )}
          </div>
        </div>
      </div>
      {displayError ? (
        <p className="mt-2 font-sans text-[13px] text-[#d92d20]">{displayError}</p>
      ) : null}
    </>
  );
}
