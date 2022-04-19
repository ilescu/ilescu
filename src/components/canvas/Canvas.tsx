import React, {useEffect, useRef} from 'react';

type CanvasProps = React.DetailedHTMLProps<React.CanvasHTMLAttributes<HTMLCanvasElement>,
    HTMLCanvasElement> & { draw: (context: CanvasRenderingContext2D, canvas: HTMLCanvasElement) => void };

const Canvas: React.FC<CanvasProps> = ({ draw, ...props }) => {
    const canvasRef = useRef<HTMLCanvasElement | null>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) {
            return;
        }
        const ctx = canvas.getContext('2d');
        if (!ctx) {
            return;
        }
        draw(ctx, canvas)
    },[draw])

    return (<canvas width={props.width} height={props.height} ref={canvasRef} />);
};

export default Canvas;