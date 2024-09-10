import icons from "./icons";
interface LogoProps {
  width?: number;
  height?: number;

  icon: string;
}

export default function SvgIcon({ width = 20, height = 20, icon }: LogoProps) {
  return (
    <svg width={width} height={height}>
      {icons[icon]}
    </svg>
  );
}
