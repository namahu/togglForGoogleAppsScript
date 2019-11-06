const getCurrentUser_ = (requset, withRelatedData: boolean = false) => {
    const path: string = `me?with_related_data=${withRelatedData}`;
    return requset.get(path);
};
