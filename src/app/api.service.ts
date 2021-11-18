import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import{ api }from'../app/interfaces/api';
import { ApiUser } from './interfaces/api-user';
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private Api = 'https://jsonplaceholder.typicode.com';
  constructor(private http: HttpClient) { }
  getAllTasks(){
    const path =`${this.Api}/todos`;
    return this.http.get<api[]>(path);
  }
  getTask(id: number) {
    const path = `${this.Api}/users/${id}`;
    return this.http.get<ApiUser>(path);
  }
  createTask(task: api) {
    const path = `${this.Api}/todos`;
    return this.http.post(path, task);
  }
  updateTask(task: api) {
    const path = `${this.Api}/todos/${task.id}`;
    return this.http.put<api>(path, task);
  }
  deleteTask(id: string) {
    const path = `${this.Api}/todos/${id}`;
    return this.http.delete(path);
  }

}
