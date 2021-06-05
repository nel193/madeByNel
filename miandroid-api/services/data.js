const MongoLib = require('../lib/mongo')

class DataService {
    constructor(){
        this.collection = 'data-android'
        this.mongoDB = new MongoLib()
    }
    async getFullData({tags}){
        const query = tags && {tags: {$in: tags}}
        const fullData = await this.mongoDB.getAll(this.collection, query);
        return fullData || [];
    }

    async getSpecificData({dataId}){
        const specificData = await this.mongoDB.get(this.collection, dataId);
        return specificData || {};
    }
    async createData({data}){
        const createDataId = await this.mongoDB.create(this.collection, data);
        return createDataId;
    }
    async updateData({dataId, data} = {}){
        const updateDataId = await this.mongoDB.update(this.collection, dataId, data);
        return updateDataId;
    }
    async editData({dataId, data} = {}){
        const editDataId = await this.mongoDB.edit(this.collection, dataId, data);
        return editDataId;
    }
    async deleteData({dataId}){
        const deleteDataId = await this.mongoDB.delete(this.collection, dataId);
        return deleteDataId;
    }
}
module.exports = DataService