const HomeEffect = (ctx: CanvasRenderingContext2D, cnv: HTMLCanvasElement): void => {

    let centerX = 250;
    let centerY = 250;
    const numberOfRings     = 3;
    const ringRadiusOffset  = 7;
    const ringRadius        = 200;
    const waveOffset        = 15;
    const colors            = [`#8a0a2e`, `#a90f3c`, `#fc1153`];
    let startAngle          = 0;

    function updateRings() {
        for (let i = 0; i < numberOfRings; i++) {
            let radius = i * ringRadiusOffset + ringRadius;
            let offsetAngle = i * waveOffset * Math.PI / 180;
            drawRing(radius, colors[i], offsetAngle);
        }

        startAngle >= 360? startAngle = 0 : startAngle++;
    }

    const maxWavesAmplitude = 17;
    const numberOfWaves     = 7;

    function drawRing(radius: number, color: string | CanvasGradient | CanvasPattern, offsetAngle: number) {
        ctx.strokeStyle = color;
        ctx.lineWidth   = 9;

        ctx.beginPath();

        for (let j = -180; j < 180; j++) {
            let currentAngle  = (j + startAngle) * Math.PI / 180;
            let displacement  = 0;
            let now = Math.abs(j);

            if (now > 70) {
                displacement = (now - 70) / 70;
            }

            if (displacement >= 1) {
                displacement = 1;
            }

            let waveAmplitude = radius + displacement * Math.sin((currentAngle + offsetAngle) * numberOfWaves) * maxWavesAmplitude;
            let x = centerX + Math.cos(currentAngle) * waveAmplitude;
            let y = centerY + Math.sin(currentAngle) * waveAmplitude;
            j > -180? ctx.lineTo(x, y) : ctx.moveTo(x, y);

        }
        ctx.closePath();
        ctx.stroke();
    }
    function loop() {
        ctx.clearRect(0, 0, cnv.width, cnv.height);
        updateRings();
        requestAnimationFrame(loop);
    }
    loop();
}

export { HomeEffect }