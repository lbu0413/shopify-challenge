const formatDate = (sampleDate) => {
	const year = sampleDate.getFullYear();
	const month = (sampleDate.getMonth() + 1).toString().padStart(2, "0");
	const date = sampleDate.getDate().toString().padStart(2, "0");
	return `${year}-${month}-${date}`;
};

export default formatDate;
