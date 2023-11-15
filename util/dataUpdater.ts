const dataUpdater = (data: (ProcessedData | undefined)[]) => {
  const updatedData: ProcessedData[] = data
    .filter((item): item is ProcessedData => item !== undefined)
    .map((item) => {
      if (item && item.Symbol) {
        const picName = item.Symbol.toUpperCase();
        return {
          ...item,
          Pic: `/${picName}.png`,
        } as ProcessedData;
      }
      throw new Error("Invalid item encountered!");
    });

  return updatedData;
};

export default dataUpdater;
