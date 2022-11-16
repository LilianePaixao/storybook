import React from "react";

interface TextoProps {
  children: React.ReactNode;
}
export default function Texto ({children, ...props }: TextoProps) {
  return (
    <Texto
      {...props}
    >
      {children}
    </Texto>
  );
}

Texto.defaultTexto = {
  disabled: false,
}