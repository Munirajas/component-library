import { ReactNode } from "react";
interface ContainerProps {
  className?: string;
  children?: ReactNode;
}

export function Container({
  className,
  children
}: ContainerProps) {

  let topClasess = "grid";
  className += topClasess

  return <><div className={className}>{children}</div></>
}

export default Container
