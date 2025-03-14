import { useEffect, useState } from "react";

function Aside() {
    return (
        <>
            <aside className="w-64 p-4 filters">
                <h3>FILTERS</h3>
                <div className="filter-section">
                    <h4>Type</h4>
                    <div className="type-options">
                        <label><input type="checkbox" /> Pan-fried</label>
                        <label><input type="checkbox" /> Stir-fried</label>
                        <label><input type="checkbox" /> Grilled</label>
                        <label><input type="checkbox" /> Roasted</label>
                        <label><input type="checkbox" /> Sauteed</label>
                        <label><input type="checkbox" /> Baked</label>
                        <label><input type="checkbox" /> Steamed</label>
                        <label><input type="checkbox" /> Stewed</label>
                    </div>
                </div>
                <div className="filter-section">
                    <hr style={{ marginTop: '30px', marginBottom: '15px' }} />
                    <h4>Time</h4>
                    <input type="range" min="10" max="150" />
                    <hr style={{ marginTop: '30px', marginBottom: '15px' }} />
                </div>
                <div className="filter-section" style={{ fontSize: '20px' }}>
                    <h4>Rating</h4>
                    <label><input type="checkbox" /> ⭐ ⭐ ⭐ ⭐ ⭐</label>
                    <label><input type="checkbox" /> ⭐ ⭐ ⭐ ⭐ ☆ </label>
                    <label><input type="checkbox" checked /> ⭐ ⭐ ⭐ ☆ ☆</label>
                    <label><input type="checkbox" /> ⭐ ⭐ ☆ ☆ ☆</label>
                    <label><input type="checkbox" /> ⭐ ☆ ☆ ☆ ☆</label>
                </div>
                <button className="apply-btn">Apply</button>
            </aside>
        </>
    );
}

export default Aside;
