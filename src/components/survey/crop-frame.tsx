import { cn } from "@/lib/utils";

interface CropFrameProps {
  src: string;
  width: number;
  height: number;
  /** The survey-blue registration outline behind the plate (portfolio only). */
  offset?: boolean;
  className?: string;
  imgClassName?: string;
  alt?: string;
}

/**
 * A plate mounted on the sheet: hairline mat, corner ticks, and optionally the
 * offset survey-blue layer from board 4. The generated project pictures are
 * illustrations, so they default to an empty alt and stay out of the
 * accessibility tree; the title beside them carries the meaning.
 */
export function CropFrame({
  src,
  width,
  height,
  offset = false,
  className,
  imgClassName,
  alt = "",
}: CropFrameProps) {
  return (
    <div
      className={cn(
        "survey-ticks border border-hairline bg-paper p-1.5",
        offset && "survey-crop",
        className,
      )}
    >
      <img
        src={src}
        alt={alt}
        aria-hidden={alt === "" ? true : undefined}
        width={width}
        height={height}
        loading="lazy"
        decoding="async"
        className={cn("block w-full object-cover", imgClassName)}
      />
    </div>
  );
}
