export function switchSlashToEmptySpace(value) {
  if (typeof value === 'string' && value.includes('://')) {
    return value;
  } else if (typeof value === 'string') {
    return value.replaceAll('//', '<wbr/>');
  }
}

export function scrollInToViewBasic(scrollRef) {
  if (scrollRef.current) {
    scrollRef.current.scrollIntoView({ behavior: 'smooth' });

    scrollRef.current.scrollTo({
      behavior: 'smooth',
      block: 'nearest',
      inline: 'center',
    });
  }
}
