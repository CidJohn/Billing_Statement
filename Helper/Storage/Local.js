class Local {
  constructor(storageName, useSession = false, id, time) {
    this.id = id;
    this.storageName = storageName;
    this.time = time;
    this.useSession = useSession;
  }

  get storage() {
    return this.useSession ? localStorage : sessionStorage;
  }

  Read() {
    return JSON.parse(this.storage.getItem(this.storageName)) || [];
  }

  Create(item) {
    let save = this.Read();
    save.push(item);
    this.storage.setItem(this.storageName, JSON.stringify(save));
  }

  ReadId(id) {
    let read = this.Read();
    return read.find((item) => item.id === id);
  }

  Update(id, itemUpdate) {
    let read = this.Read();
    read = read.map((item) =>
      item.id === id ? { ...item, ...itemUpdate } : item
    );
    this.storage.setItem(this.storageName, JSON.stringify(read));
  }

  Delete(id) {
    let read = this.Read();
    const index = read.findIndex((item, index) => index === id);
    if (index !== -1) {
      read.splice(index, 1);
      this.storage.setItem(this.storageName, JSON.stringify(read));
    }
  }

  DeleteStorage() {
    this.storage.removeItem(this.storageName);
  }
}

export default Local;
