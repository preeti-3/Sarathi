export function BackgroundLayers() {
    return (
        <>
            {/* Layer 1: Cosmic gradient - handled by body class */}

            {/* Layer 2: Battlefield silhouette */}
            <div className="battlefield-silhouette" aria-hidden="true" />

            {/* Layer 3: Fog animation */}
            <div className="fog-container" aria-hidden="true">
                <div className="fog-layer fog-1" />
                <div className="fog-layer fog-2" />
                <div className="fog-layer fog-3" />
            </div>
        </>
    );
}
