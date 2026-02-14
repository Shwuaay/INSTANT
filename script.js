* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: "Georgia", serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    transition: background 1.5s ease;
    overflow-x: hidden;
    position: relative;
}

/* ===== PHASE NEUTRE/MYSTÉRIEUSE ===== */
#container {
    text-align: center;
    width: 90%;
    max-width: 800px;
    transition: all 1.2s ease;
    padding: 60px 40px;
    border-radius: 20px;
    z-index: 2;
    position: relative;
}

#container.neutre {
    background: rgba(255, 255, 255, 0.95);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);
    backdrop-filter: blur(10px);
}

#intro-page {
    display: block;
}

.mystery-content {
    animation: fadeInScale 1s ease;
}

@keyframes fadeInScale {
    0% {
        opacity: 0;
        transform: scale(0.9);
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.envelope-icon {
    font-size: 80px;
    margin-bottom: 30px;
    animation: float 3s ease-in-out infinite;
    filter: drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2));
}

@keyframes float {
    0%, 100% { transform: translateY(0px); }
    50% { transform: translateY(-20px); }
}

.mystery-title {
    font-size: 32px;
    color: #2d3748;
    margin-bottom: 15px;
    font-weight: 600;
    letter-spacing: -0.5px;
}

.mystery-subtitle {
    font-size: 20px;
    color: #4a5568;
    margin-bottom: 10px;
    font-style: italic;
}

.mystery-hint {
    font-size: 16px;
    color: #718096;
    margin-bottom: 40px;
    opacity: 0.8;
}

.reveal-btn {
    padding: 18px 45px;
    font-size: 20px;
    border-radius: 50px;
    border: none;
    cursor: pointer;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    color: white;
    box-shadow: 0 10px 30px rgba(102, 126, 234, 0.4);
    transition: all 0.4s ease;
    font-family: "Georgia", serif;
    font-weight: 600;
    display: inline-flex;
    align-items: center;
    gap: 12px;
    position: relative;
    overflow: hidden;
}

.reveal-btn::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.3), transparent);
    transition: left 0.5s;
}

.reveal-btn:hover::before {
    left: 100%;
}

.reveal-btn:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 15px 40px rgba(102, 126, 234, 0.6);
}

.reveal-btn:active {
    transform: translateY(-1px) scale(1.02);
}

.btn-icon {
    font-size: 24px;
    animation: pulse 2s ease-in-out infinite;
}

@keyframes pulse {
    0%, 100% { transform: scale(1); }
    50% { transform: scale(1.2); }
}

/* ===== PHASE ROMANTIQUE ===== */
#container.romantique {
    background: rgba(255, 255, 255, 0.98);
    box-shadow: 0 20px 60px rgba(255, 105, 180, 0.4);
    max-width: 900px;
}

body.active {
    background: linear-gradient(135deg, #ff9a9e 0%, #fad0c4 50%, #fbc2eb 100%);
}

body.active::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.1) 0%, transparent 50%);
    animation: shimmer 10s linear infinite;
    pointer-events: none;
    z-index: 1;
}

@keyframes shimmer {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* ===== CŒURS ANIMÉS ===== */
.heart {
    position: fixed;
    bottom: -50px;
    color: #ff4b5c;
    font-size: 20px;
    user-select: none;
    pointer-events: none;
    z-index: 1;
    animation: floatUp linear forwards;
    filter: drop-shadow(0 0 5px rgba(255, 75, 92, 0.5));
}

@keyframes floatUp {
    0% { 
        transform: translateY(0) rotate(0deg) scale(1); 
        opacity: 1; 
    }
    50% {
        transform: translateY(-55vh) rotate(180deg) scale(1.2);
        opacity: 0.8;
    }
    100% { 
        transform: translateY(-110vh) rotate(360deg) scale(0.8); 
        opacity: 0; 
    }
}

/* ===== MESSAGE D'AMOUR ===== */
#message {
    display: none;
    text-align: left;
    line-height: 1.9;
    font-size: 18px;
    color: #2d3748;
    animation: revealLetter 2s ease;
}

@keyframes revealLetter {
    0% { 
        opacity: 0; 
        transform: translateY(50px);
        filter: blur(10px);
    }
    100% { 
        opacity: 1; 
        transform: translateY(0);
        filter: blur(0);
    }
}

.letter-header {
    text-align: center;
    margin-bottom: 35px;
}

.heart-divider {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    font-size: 28px;
    margin-bottom: 20px;
}

.heart-divider span {
    animation: sparkle 2s ease-in-out infinite;
}

.heart-divider span:nth-child(1) {
    animation-delay: 0s;
}

.heart-divider span:nth-child(2) {
    animation-delay: 0.3s;
}

.heart-divider span:nth-child(3) {
    animation-delay: 0.6s;
}

@keyframes sparkle {
    0%, 100% { 
        opacity: 1; 
        transform: scale(1); 
    }
    50% { 
        opacity: 0.6; 
        transform: scale(1.3); 
    }
}

h2 { 
    color: #d63384; 
    margin-bottom: 30px;
    font-size: 28px;
    text-align: center;
    font-weight: 600;
}

p {
    margin-bottom: 22px;
    text-align: justify;
    padding: 0 10px;
}

.signature-section {
    text-align: center;
    margin-top: 50px;
    padding-top: 30px;
    border-top: 2px solid rgba(214, 51, 132, 0.2);
}

h3 { 
    color: #d63384; 
    margin-top: 25px;
    margin-bottom: 15px;
    font-size: 32px;
    animation: heartbeat 1.5s ease-in-out infinite;
}

@keyframes heartbeat {
    0%, 100% { transform: scale(1); }
    10%, 30% { transform: scale(1.1); }
    20%, 40% { transform: scale(1); }
}

.signature {
    font-size: 22px;
    color: #2d3748;
    margin-top: 10px;
}

#player { 
    width: 0; 
    height: 0; 
    position: absolute; 
    opacity: 0;
}

/* ===== RESPONSIVE ===== */
@media (max-width: 768px) {
    .mystery-title {
        font-size: 26px;
    }

    .mystery-subtitle {
        font-size: 18px;
    }

    .envelope-icon {
        font-size: 60px;
    }

    .reveal-btn {
        padding: 15px 35px;
        font-size: 18px;
    }

    #container { 
        padding: 40px 25px; 
        width: 95%; 
    }

    #message { 
        font-size: 16px; 
        line-height: 1.7;
    }

    h2 {
        font-size: 24px;
    }

    h3 {
        font-size: 28px;
    }

    p {
        padding: 0 5px;
    }
}

@media (max-width: 480px) {
    .mystery-title {
        font-size: 22px;
    }

    .mystery-subtitle {
        font-size: 16px;
    }

    .envelope-icon {
        font-size: 50px;
    }

    .reveal-btn {
        padding: 12px 28px;
        font-size: 16px;
    }

    #container {
        padding: 30px 20px;
    }

    #message {
        font-size: 15px;
    }

    h2 {
        font-size: 20px;
    }

    .signature {
        font-size: 18px;
    }
}
