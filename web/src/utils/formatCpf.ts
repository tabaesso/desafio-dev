const formatCpf = (value: string): string =>
  `${value.substring(0, 3)}.${value.substring(3, 6)}-${value.substring(6, 8)}`;

export default formatCpf;