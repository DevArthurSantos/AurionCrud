import { ReactNode, useEffect, useState } from 'react';
import { TbDragDrop } from 'react-icons/tb';
import Draggable from 'react-draggable';

type DragableComponentProps = {
  children: ReactNode;
};

type PositionProps = {
  x: number;
  y: number;
};

export default function DragableComponent({
	children,
}: DragableComponentProps) {
	const [createComponentPosition, setCreateComponentPosition] = useState({
		x: 0,
		y: 0,
	});

	const handleStop = (e: any) => {
		const position: PositionProps = {
			x: e.x,
			y: e.y,
		};
		setCreateComponentPosition(position);
	};

	useEffect(() => {
		const elementBelow = document.elementFromPoint(createComponentPosition.x, createComponentPosition.y);
		if (elementBelow?.id !== 'test') return;
		const campo = document.getElementById('test');
		const div = document.createElement('div');
		const divText = document.createTextNode(JSON.stringify(children));
		div.appendChild(divText);
		div.style.position = 'absolute';
		div.style.top = `${createComponentPosition.y}px`;
		div.style.left = `${createComponentPosition.x}px`;
		campo?.appendChild(div);

	}, [createComponentPosition, children]);

	return (
		<Draggable
			axis="both"
			handle=".handle"
			position={{ x: 0, y: 0 }}
			scale={1}
			onStop={(e) => {
				handleStop(e);
			}}
		>
			<div style={{display: 'flex', alignItems: 'center', justifyContent:'center', flexDirection: 'column'}}>
				{children}
				<TbDragDrop className="handle" />
			</div>
		</Draggable>
	);
}
