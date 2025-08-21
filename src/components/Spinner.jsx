const Spinner = ({ size = 48 }) => {
    const px = typeof size === "number" ? `${size}px` : size;

    return (
        <div role="status" className="flex flex-col items-center justify-center gap-3">
            <svg
                viewBox="0 0 50 50"
                style={{ width: px, height: px }}
                className="animate-spin text-indigo-600"
                aria-hidden="true"
            >
                <defs>
                    <linearGradient id="spinner-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
                        <stop offset="100%" stopColor="transparent" stopOpacity="0" />
                    </linearGradient>
                </defs>

                {/* soft track */}
                <circle cx="25" cy="25" r="20" stroke="currentColor" strokeOpacity="0.12" strokeWidth="6" fill="none" />

                {/* moving arc */}
                <path
                    d="M25 5 A20 20 0 0 1 45 25"
                    stroke="url(#spinner-grad)"
                    strokeWidth="6"
                    strokeLinecap="round"
                    fill="none"
                />
            </svg>

        </div>
    );
};

export default Spinner;