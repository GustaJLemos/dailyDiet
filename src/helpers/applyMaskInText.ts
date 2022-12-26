export type Type = 'hour' | 'date'

export type Props = {
  text: string;
  type: Type
}

export function applyMaskInText({ text, type }: Props) {
  if(type === 'hour') {
    text = text.replace(/^(\d{2})(\d{2})/, '$1:$2');
  }

  if(type === 'date') {
    text = text.replace(/^(\d{2})(\d{2})(\d{4})/, '$1/$2/$3');
  }

  return text;
}