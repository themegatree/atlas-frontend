const createDateLabels = () => {
    return last7Days().slice(0,5).concat(["yesterday", "today",]);
};

const last7Days = () => {
    let result = [];
    for (let i=0; i<7; i++) {
        const d = new Date();
        d.setDate(d.getDate() - i);
        result.unshift(formatDate(d));
    }
    return(result);
};

const formatDate = (date) => {
    date = date.toLocaleDateString();
    return date
};

export default createDateLabels;