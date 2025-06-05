// debug.js
// Debugging overlay and event logging for Atlan Data Defender

(function() {
    // Create debug overlays if not present
    if (!document.getElementById('debug')) {
        const debugDiv = document.createElement('div');
        debugDiv.id = 'debug';
        debugDiv.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            background: rgba(0,0,0,0.7);
            color: white;
            padding: 10px;
            font-size: 12px;
            z-index: 1000;
            pointer-events: none;
        `;
        document.body.appendChild(debugDiv);
    }
    if (!document.getElementById('touchDebug')) {
        const touchDiv = document.createElement('div');
        touchDiv.id = 'touchDebug';
        touchDiv.style.cssText = `
            position: fixed;
            top: 40px;
            left: 0;
            background: rgba(0,0,0,0.7);
            color: white;
            padding: 10px;
            font-size: 12px;
            z-index: 1000;
            pointer-events: none;
        `;
        document.body.appendChild(touchDiv);
    }

    // Touch event debugging
    document.addEventListener('touchstart', function(e) {
        const t = e.touches[0];
        console.log('Touch start:', { x: t.clientX, y: t.clientY, target: e.target.id });
        document.getElementById('touchDebug').textContent = `Touch: ${t.clientX}, ${t.clientY}`;
    }, false);
    document.addEventListener('touchmove', function(e) {
        const t = e.touches[0];
        console.log('Touch move:', { x: t.clientX, y: t.clientY, target: e.target.id });
    }, false);
    document.addEventListener('touchend', function(e) {
        console.log('Touch end');
        document.getElementById('touchDebug').textContent = '';
    }, false);

    // Button control debugging
    const btns = [
        { id: 'leftBtn', label: 'Left' },
        { id: 'rightBtn', label: 'Right' },
        { id: 'fireBtn', label: 'Fire' }
    ];
    btns.forEach(btn => {
        const el = document.getElementById(btn.id);
        if (!el) return;
        el.addEventListener('touchstart', (e) => {
            e.preventDefault();
            console.log(`${btn.label} button touched`);
            document.getElementById('debug').textContent = `${btn.label} button active`;
        });
        el.addEventListener('touchend', (e) => {
            e.preventDefault();
            console.log(`${btn.label} button released`);
            document.getElementById('debug').textContent = '';
        });
        el.addEventListener('mousedown', () => {
            console.log(`${btn.label} button mouse down`);
            document.getElementById('debug').textContent = `${btn.label} button active`;
        });
        el.addEventListener('mouseup', () => {
            console.log(`${btn.label} button mouse up`);
            document.getElementById('debug').textContent = '';
        });
    });

    // Canvas and container size debugging
    window.addEventListener('resize', () => {
        const container = document.getElementById('gameContainer');
        if (container) {
            console.log('Container size:', container.offsetWidth, window.innerHeight);
        }
        const canvas = document.querySelector('canvas');
        if (canvas) {
            console.log('Canvas size:', canvas.width, canvas.height);
        }
    });

    // Initial log
    window.addEventListener('DOMContentLoaded', () => {
        const container = document.getElementById('gameContainer');
        if (container) {
            console.log('Container size:', container.offsetWidth, window.innerHeight);
        }
        const canvas = document.querySelector('canvas');
        if (canvas) {
            console.log('Canvas size:', canvas.width, canvas.height);
        }
    });
})(); 