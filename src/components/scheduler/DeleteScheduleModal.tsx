"use client";

interface Props {
  scheduleName: string;
  isDeleting: boolean;
  onClose: () => void;
  onConfirm: () => void;
}

export function DeleteScheduleModal({
  scheduleName,
  isDeleting,
  onClose,
  onConfirm,
}: Props) {
  return (
    <div
      data-testid="modules-amenities-components-schedule-deleteschedulemodal--div--i1"
      className="fixed inset-0 z-100 flex items-center justify-center bg-black/40"
      onClick={(e) => e.target === e.currentTarget && !isDeleting && onClose()}
    >
      <div className="w-full max-w-md rounded-2xl bg-white shadow-2xl p-6">
        <div
          className="w-10 h-10 rounded-full bg-red-100 flex items-center
          justify-center mx-auto mb-4"
        >
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
            <path
              d="M3 6h18M8 6V4h8v2M19 6l-1 14H6L5 6"
              stroke="#EF4444"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <p className="text-md text-gray-700 text-center mb-3">
          Are you sure you want to delete schedule{" "}
          <span className="font-semibold text-gray-900">{scheduleName}</span>?{" "}
        </p>

        <div className="flex gap-3">
          <button
            data-testid="modules-amenities-components-schedule-deleteschedulemodal--button--i1"
            onClick={onClose}
            disabled={isDeleting}
            className="flex-1 h-10 rounded-lg border border-gray-200 cursor-pointer
              text-sm text-gray-600 hover:bg-gray-50
              transition-colors disabled:opacity-40"
          >
            Cancel
          </button>
          <button
            data-testid="modules-amenities-components-schedule-deleteschedulemodal--button--i2"
            onClick={onConfirm}
            disabled={isDeleting}
            className="flex-1 h-10 rounded-lg bg-red-600 hover:bg-red-700 cursor-pointer
              text-white text-sm font-medium transition-colors
              disabled:opacity-60 flex items-center justify-center gap-2"
          >
            {isDeleting ? (
              <>
                <svg
                  className="w-4 h-4 animate-spin"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  />

                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                  />
                </svg>
                Deleting...
              </>
            ) : (
              "Delete"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
