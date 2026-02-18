export function BackgroundLayers() {
    return (
        <div className="background-wrapper" aria-hidden="true">
            {/* Layer 1: Static cosmic gradient base */}
            <div className="cosmic-base" />

            {/* Layer 2: Battlefield silhouette */}
            <div className="battlefield-silhouette" />

            {/* Layer 3: Fog animation */}
            <div className="fog-container">
                <div className="fog-layer fog-1" />
                <div className="fog-layer fog-2" />
                <div className="fog-layer fog-3" />
            </div>
        </div>
    );
}
