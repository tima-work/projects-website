import React, { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';

const SquigglyTimeline = ({ projects, isDarkMode }) => {
    const [path, setPath] = useState('');
    const containerRef = useRef(null);
    const projectRefs = useRef([]);

    // Set up refs for each project
    useEffect(() => {
        projectRefs.current = projectRefs.current.slice(0, projects.length);
    }, [projects]);

    // Calculate the path when elements are rendered and on window resize
    useEffect(() => {
        const calculatePath = () => {
            if (!containerRef.current || projectRefs.current.some(ref => !ref)) return;

            const containerRect = containerRef.current.getBoundingClientRect();
            const points = [];

            projectRefs.current.forEach((ref, index) => {
                if (!ref) return;

                const rect = ref.getBoundingClientRect();
                const relativeY = rect.top + rect.height - containerRect.top;

                // Alternate between left and right sides
                const relativeX = index % 2 === 0
                    ? containerRect.width * 0.6 // Right side project, line on left
                    : containerRect.width * 0.4 // Left side project, line on right

                points.push({ x: relativeX, y: relativeY });
            });

            // Generate the SVG path
            if (points.length < 2) return;

            let svgPath = `M ${points[0].x} ${points[0].y}`;

            for (let i = 1; i < points.length; i++) {
                const prevPoint = points[i - 1];
                const currPoint = points[i];
                const midY = (prevPoint.y + currPoint.y) / 2;

                // Add squiggly effect with control points
                const amplitude = 200; // Controls the "waviness"
                const controlPoint1X = prevPoint.x;
                const controlPoint1Y = prevPoint.y + (midY - prevPoint.y) / 2;
                const controlPoint2X = currPoint.x;
                const controlPoint2Y = midY + (currPoint.y - midY) / 2;

                // Add some randomness to make it more squiggly
                const randomOffset1 = (Math.random() - 0.5) * amplitude;
                const randomOffset2 = (Math.random() - 0.5) * amplitude;

                svgPath += ` C ${controlPoint1X + randomOffset1} ${controlPoint1Y}, ${controlPoint2X + randomOffset2} ${controlPoint2Y}, ${currPoint.x} ${currPoint.y}`;
            }

            setPath(svgPath);
        };

        // Calculate initially and on resize
        calculatePath();
        window.addEventListener('resize', calculatePath);

        // Recalculate after a short delay to ensure all elements are properly rendered
        const timeout = setTimeout(calculatePath, 500);

        return () => {
            window.removeEventListener('resize', calculatePath);
            clearTimeout(timeout);
        };
    }, [projects, isDarkMode]);

    return (
        <div ref={containerRef} className="absolute inset-0 pointer-events-none overflow-visible">
            <svg className="w-full h-full" style={{ overflow: 'visible' }}>
                <motion.path
                    d={path}
                    fill="none"
                    strokeWidth="3"
                    strokeLinecap="round"
                    initial={{ pathLength: 0, opacity: 0 }}
                    animate={{ pathLength: 1, opacity: 1 }}
                    transition={{ duration: 2, ease: "easeInOut" }}
                    className={`${isDarkMode ? 'stroke-purple-400' : 'stroke-indigo-500'}`}
                    strokeDasharray="10 5"
                />
                {/* Add dots at each project point */}
                {projectRefs.current.map((_, index) => (
                    <motion.circle
                        key={index}
                        cx="0"
                        cy="0"
                        r="6"
                        className={`${isDarkMode ? 'fill-purple-400' : 'fill-indigo-500'}`}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.5 + index * 0.2, duration: 0.5 }}
                        style={{
                            transformBox: 'fill-box',
                            transformOrigin: 'center',
                            transform: `translate(${path.split(' ')[index * 7 + 1] || 0}px, ${path.split(' ')[index * 7 + 2] || 0}px)`
                        }}
                    />
                ))}
            </svg>
            {/* Render invisible divs to track project positions */}
            {projects.map((_, index) => (
                <div
                    key={index}
                    ref={el => projectRefs.current[index] = el}
                    className="absolute opacity-0"
                    style={{
                        top: `${index * 96 + 50}vh`, // Approximate position based on your spacing
                        left: index % 2 === 0 ? '40%' : '60%',
                        width: '10px',
                        height: '10px'
                    }}
                />
            ))}
        </div>
    );
};

export default SquigglyTimeline;
