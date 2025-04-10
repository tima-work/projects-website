// import React from 'react';

// export default function SquigglySVG({ 
//   direction,
//   isDarkMode
// }) {
//     return (
//         <div className="w-full h-full flex items-center justify-center relative">
//             <svg
//                 /*width="100%"*/
//                 width="40%"
//                 height="auto"
//                 viewBox="0 0 897 242"
//                 preserveAspectRatio="none"
//                 /*className={`absolute top-0 left-0 overflow-visible transform ${direction === 'left' ? 'scale-x-[-1]' : ''}`}*/
//                 className={`absolute top-0 left-1/4 overflow-visible transform ${direction === 'left' ? 'scale-x-[-1]' : ''}`}
//                 xmlns="http://www.w3.org/2000/svg"
//             >
//                 <g transform="translate(0,242) scale(0.1,-0.1)" fill={isDarkMode ? "#189c03" : "000000"} stroke="none">
//                     <path 
//                         d="M8734 2403 c-52 -176 -270 -316 -724 -467 -58 -19 -123 -39 -145 -45
//                         -22 -5 -56 -14 -75 -20 -77 -21 -279 -72 -350 -87 -461 -99 -691 -142 -1340
//                         -245 -133 -21 -188 -30 -290 -44 -148 -21 -177 -25 -247 -36 -35 -5 -92 -13
//                         -128 -19 -36 -5 -95 -14 -133 -20 -37 -5 -119 -17 -182 -25 -63 -8 -142 -19
//                         -175 -24 -33 -6 -96 -15 -140 -21 -105 -15 -181 -26 -345 -50 -74 -11 -171
//                         -24 -215 -30 -124 -18 -218 -32 -400 -60 -33 -5 -107 -16 -165 -25 -119 -17
//                         -188 -28 -412 -65 -35 -6 -103 -17 -153 -25 -49 -7 -101 -15 -115 -18 -69 -14
//                         -152 -30 -325 -62 -104 -20 -208 -40 -230 -45 -22 -5 -74 -16 -115 -25 -41 -8
//                         -142 -30 -225 -49 -794 -181 -1292 -401 -1455 -642 -62 -92 -95 -254 -52 -254
//                         14 0 17 10 19 58 8 199 218 384 615 543 112 45 302 110 413 141 154 43 415
//                         111 500 129 167 37 529 111 635 130 307 56 531 94 735 124 55 8 127 19 160
//                         25 73 11 181 29 255 40 30 5 123 18 205 30 83 11 197 28 255 36 58 9 132 20
//                         165 24 33 5 139 20 235 34 158 23 356 51 545 77 39 6 97 14 130 19 33 5 110
//                         16 170 24 61 9 137 20 170 25 33 5 94 15 135 21 41 6 102 16 135 21 33 5 103
//                         16 155 24 178 28 327 53 508 85 78 15 144 27 272 49 63 12 133 25 155 31 22
//                         5 96 21 165 35 141 30 360 81 405 96 17 5 73 21 125 35 380 102 681 244 817
//                         386 42 43 93 132 93 162 0 22 -29 20 -36 -1z"
//                         className="text-gray-300 dark:text-gray-700 stroke-current"
//                     />
//                 </g>
//             </svg>
//         </div>
//     );
// }





























"use client"

export default function SquigglySVG({
  direction = "right",
  isDarkMode = false,
  glowColor = "#4ade80",
  glowIntensity = 8,
  shadowOpacity = 0.6,
  shadowBlur = 6,
}) {
  // Generate unique IDs for our filters
  const filterId = `squiggly-filter-${Math.floor(Math.random() * 10000)}`

  return (
    <div className="w-full h-full flex items-center justify-center relative">
      {/* Shadow element - only shown in light mode, offset by 10px */}
      {!isDarkMode && (
        <svg
          width="40%"
          height="auto"
          viewBox="0 0 897 242"
          preserveAspectRatio="none"
          className="absolute top-0 overflow-visible"
          style={{
            position: "absolute",
            top: direction === "left" ? "-20px" : "20px",
            left: "calc(25% + 20px)",
            transform: direction === "left" ? "scaleX(-1)" : "none",
            opacity: shadowOpacity,
            filter: `blur(${shadowBlur}px)`,
            zIndex: 0,
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <g transform="translate(0,242) scale(0.1,-0.1)" fill="rgba(0,0,0,0.5)" stroke="none">
            <path
              d="M8734 2403 c-52 -176 -270 -316 -724 -467 -58 -19 -123 -39 -145 -45
                            -22 -5 -56 -14 -75 -20 -77 -21 -279 -72 -350 -87 -461 -99 -691 -142 -1340
                            -245 -133 -21 -188 -30 -290 -44 -148 -21 -177 -25 -247 -36 -35 -5 -92 -13
                            -128 -19 -36 -5 -95 -14 -133 -20 -37 -5 -119 -17 -182 -25 -63 -8 -142 -19
                            -175 -24 -33 -6 -96 -15 -140 -21 -105 -15 -181 -26 -345 -50 -74 -11 -171
                            -24 -215 -30 -124 -18 -218 -32 -400 -60 -33 -5 -107 -16 -165 -25 -119 -17
                            -188 -28 -412 -65 -35 -6 -103 -17 -153 -25 -49 -7 -101 -15 -115 -18 -69 -14
                            -152 -30 -325 -62 -104 -20 -208 -40 -230 -45 -22 -5 -74 -16 -115 -25 -41 -8
                            -142 -30 -225 -49 -794 -181 -1292 -401 -1455 -642 -62 -92 -95 -254 -52 -254
                            14 0 17 10 19 58 8 199 218 384 615 543 112 45 302 110 413 141 154 43 415
                            111 500 129 167 37 529 111 635 130 307 56 531 94 735 124 55 8 127 19 160
                            25 73 11 181 29 255 40 30 5 123 18 205 30 83 11 197 28 255 36 58 9 132 20
                            165 24 33 5 139 20 235 34 158 23 356 51 545 77 39 6 97 14 130 19 33 5 110
                            16 170 24 61 9 137 20 170 25 33 5 94 15 135 21 41 6 102 16 135 21 33 5 103
                            16 155 24 178 28 327 53 508 85 78 15 144 27 272 49 63 12 133 25 155 31 22
                            5 96 21 165 35 141 30 360 81 405 96 17 5 73 21 125 35 380 102 681 244 817
                            386 42 43 93 132 93 162 0 22 -29 20 -36 -1z"
            />
          </g>
        </svg>
      )}

      {/* Main SVG with glow */}
      <svg
        width="40%"
        height="auto"
        viewBox="0 0 897 242"
        preserveAspectRatio="none"
        className="absolute top-0 left-1/4 overflow-visible"
        style={{
          position: "absolute",
          top: 0,
          left: "25%",
          transform: direction === "left" ? "scaleX(-1)" : "none",
          zIndex: 1,
        }}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter id={filterId} x="-50%" y="-50%" width="200%" height="200%">
            {/* Glow effect - more intense */}
            <feGaussianBlur in="SourceGraphic" stdDeviation={glowIntensity} result="blur" />
            <feFlood floodColor={glowColor} floodOpacity="0.8" result="glowColor" />
            <feComposite in="glowColor" in2="blur" operator="in" result="softGlow" />

            {/* Combine original with glow */}
            <feMerge>
              <feMergeNode in="softGlow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        <g
          transform="translate(0,242) scale(0.1,-0.1)"
          fill={isDarkMode ? "#189c03" : "#000000"}
          stroke="none"
          filter={`url(#${filterId})`}
        >
          <path
            d="M8734 2403 c-52 -176 -270 -316 -724 -467 -58 -19 -123 -39 -145 -45
                        -22 -5 -56 -14 -75 -20 -77 -21 -279 -72 -350 -87 -461 -99 -691 -142 -1340
                        -245 -133 -21 -188 -30 -290 -44 -148 -21 -177 -25 -247 -36 -35 -5 -92 -13
                        -128 -19 -36 -5 -95 -14 -133 -20 -37 -5 -119 -17 -182 -25 -63 -8 -142 -19
                        -175 -24 -33 -6 -96 -15 -140 -21 -105 -15 -181 -26 -345 -50 -74 -11 -171
                        -24 -215 -30 -124 -18 -218 -32 -400 -60 -33 -5 -107 -16 -165 -25 -119 -17
                        -188 -28 -412 -65 -35 -6 -103 -17 -153 -25 -49 -7 -101 -15 -115 -18 -69 -14
                        -152 -30 -325 -62 -104 -20 -208 -40 -230 -45 -22 -5 -74 -16 -115 -25 -41 -8
                        -142 -30 -225 -49 -794 -181 -1292 -401 -1455 -642 -62 -92 -95 -254 -52 -254
                        14 0 17 10 19 58 8 199 218 384 615 543 112 45 302 110 413 141 154 43 415
                        111 500 129 167 37 529 111 635 130 307 56 531 94 735 124 55 8 127 19 160
                        25 73 11 181 29 255 40 30 5 123 18 205 30 83 11 197 28 255 36 58 9 132 20
                        165 24 33 5 139 20 235 34 158 23 356 51 545 77 39 6 97 14 130 19 33 5 110
                        16 170 24 61 9 137 20 170 25 33 5 94 15 135 21 41 6 102 16 135 21 33 5 103
                        16 155 24 178 28 327 53 508 85 78 15 144 27 272 49 63 12 133 25 155 31 22
                        5 96 21 165 35 141 30 360 81 405 96 17 5 73 21 125 35 380 102 681 244 817
                        386 42 43 93 132 93 162 0 22 -29 20 -36 -1z"
          />
        </g>
      </svg>
    </div>
  )
}