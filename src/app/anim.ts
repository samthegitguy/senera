export default function anim(block: HTMLElement, type: HTMLElement) {

  function easeOutQuad (
    percentComplete: number,
    elapsed: number,
    startValue: number,
    endValue: number,
    duration: number
  ) {
    return -endValue * (elapsed /= duration) * (elapsed - 2) + startValue;
  };

  const width = parseInt(block?.style.width);
  const height = parseInt(block?.style.height);

  block.style.position = "absolute";

  const aspectRatio = height / width;
  block.style.height = window.getComputedStyle(type).fontSize + "px";
  block.style.width = String(height * aspectRatio) + "px";
  

  let time = 0; // Initial time
  const initialYPosition = -100; // Initial position
  const finalYPosition = type.getBoundingClientRect().top;
  const XPosition = type.getBoundingClientRect().left;

  let y = initialYPosition;

  const id = setInterval(() => {

    time++;

    y = easeOutQuad(y / finalYPosition, time, 0, finalYPosition, 100);

    if (y >= finalYPosition) {
      clearInterval(id);
    }

    block.style.left = XPosition + "px";
    block.style.top = y + "px";
  }, 1);
}

