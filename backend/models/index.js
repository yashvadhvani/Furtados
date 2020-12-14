const save = (Model, params) => {
    const data = new Model();
    Object.keys(params).forEach((key) => {
        data[key] = params[key];
    });
    return data.save();
};

const find = (Model, query) => Model.find(query);
const findWithLimit = (Model, query, limit) => Model.find(query).limit(limit);
const findOne = (Model, query) => Model.findOne(query);
const findWithFilter = (Model, query, filter) => Model.find(query, filter);
const findOneWithFilter = (Model, query, filter) => Model.findOne(query, filter);
const findOneAndUpdate = (Model, query, updates, options) => Model.findOneAndUpdate(
    query, updates, { ...options },
);

const findOneAndUpdateWithOptions = (Model, query, updates, options) => Model.findOneAndUpdate(
    query, updates, options,
);
const deleteOne = (Model, query) => Model.deleteOne(query);
const aggregate = (Model, query) => Model.aggregate(query);

module.exports = {
    save,
    find,
    findWithLimit,
    findOne,
    findWithFilter,
    findOneWithFilter,
    findOneAndUpdate,
    findOneAndUpdateWithOptions,
    deleteOne,
    aggregate,
}