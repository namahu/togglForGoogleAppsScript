const getCurrentUser_ = (withRelatedData: boolean = false, requset) => {
    const path: string = `me?with_related_data=${withRelatedData}`;
    return requset.get(path);
};
