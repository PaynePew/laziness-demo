import { PlasmicCanvasContext } from "@plasmicapp/host";

interface GoogleMapAPI {
  className?: string;
  location?: string;
  width?: number;
  height?: number;
}

export function PriceChart({
  className,
  location,
  width,
  height,
}: GoogleMapAPI) {
  return (
    <div className={className}>
      <iframe
        width={`${width}`}
        height={`${height}`}
        style={{ border: 0, maxWidth: "100%" }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyD78M-Wm7jw8EBXT6eg1AqiTUQWv6zn344
    &q=${location}`}
      ></iframe>
    </div>
  );
}
