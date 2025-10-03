import React, { ReactNode } from "react";

interface SimpleCardProps {
  children: ReactNode;
  className?: string;
  size?: "sm" | "md" | "lg" | "xl";
  width?: string | number;
  height?: string | number;
  customSize?: boolean; // Cuando es true, ignora la prop 'size' y usa 'width'/'height' o 'className'
}

const sizeMap = {
  sm: "w-48 h-64",
  md: "w-64 h-80",
  lg: "w-80 h-96",
  xl: "w-96 h-112",
};

const SimpleCard: React.FC<SimpleCardProps> = ({
  children,
  className = "",
  size = "md",
  width,
  height,
  customSize = false,
}) => {
  // Determina las clases de tamaño
  const getSizeClasses = () => {
    if (customSize) {
      return ""; // Permite que className o los estilos en línea manejen el tamaño
    }
    return sizeMap[size];
  };

  // Aplica estilos en línea para ancho y alto si se proporcionan
  const getInlineStyles = (): React.CSSProperties => {
    const styles: React.CSSProperties = {
      backgroundColor: "rgba(204, 204, 204, 0.12)", // Un color de fondo de respaldo
      backdropFilter: "blur(10px)", // Mantenemos el efecto de desenfoque de fondo
    };

    if (width !== undefined) {
      styles.width = typeof width === "number" ? `${width}px` : width;
    }
    if (height !== undefined) {
      styles.height = typeof height === "number" ? `${height}px` : height;
    }

    return styles;
  };

  return (
    <div
      style={getInlineStyles()}
      className={`
        ${getSizeClasses()}
        ${!customSize ? "aspect-[3/4]" : ""}
        rounded-2xl 
        relative 
        grid 
        grid-rows-[1fr_auto] 
        shadow-[0_1rem_2rem_-1rem_black] 
        p-4
        border border-gray-700/50  // Un borde sutil para definir la card
        ${className}
      `}
    >
      {children}
    </div>
  );
};

export { SimpleCard };
