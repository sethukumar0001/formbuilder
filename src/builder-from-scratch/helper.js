export const handleSelectFields = (value,selectedFields,setSelectedFields) => {
    selectedFields.push(value);
    setSelectedFields([...selectedFields]);
};

export const handleDeleteFields = (value, index,selectedFields,setSelectedFields) => {
    let filtered = selectedFields.filter((_item, i) => i === index);
    if (filtered.length > 0) {
        let filteredOne = selectedFields.filter((_item, i) => i !== index);
        setSelectedFields(filteredOne);
    } else {
        selectedFields.push(value);
        setSelectedFields([...selectedFields]);
    }
};