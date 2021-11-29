const sortData = (data) => {
  data.sort((a, b) => {
    return a.priority - b.priority;
  });

  return data;
};

module.exports = sortData;
