import { Injectable } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';

const GET_ALL_CARS = gql`
  query {
    getAllCars {
      id
      firstName
      lastName
      email
      carMake
      carModel
      vin
      manufacturedDate
      ageOfVehicle
    }
  }
`;

const GET_A_CAR = gql`
  query($id: Int!) {
    getACar(id: $id) {
      id
      firstName
      lastName
      email
      carMake
      carModel
      vin
    }
  }
`;

const UPDATE_CAR = gql`
  mutation(
    $id: Int!
    $firstName: String
    $lastName: String
    $email: String
    $carMake: String
    $carModel: String
    $vin: String
  ) {
    updateCar(
      id: $id
      firstName: $firstName
      lastName: $lastName
      email: $email
      carMake: $carMake
      carModel: $carModel
      vin: $vin
    ) {
      id
      firstName
      lastName
      email
      carMake
      carModel
      vin
    }
  }
`;

const DELETE_CAR = gql`
  mutation($id: Int!) {
    deleteCar(id: $id){
      id
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class CarService {

  constructor(private apollo: Apollo) { }

  deleteCar(id: number) {
    return this.apollo.mutate({
      mutation: DELETE_CAR,
      refetchQueries: [{ query: GET_ALL_CARS }],
      variables: {
        id: Number(id)
      },
    })
  }

  updateCar(
    id: number,
    firstName: string,
    lastName: string,
    email: string,
    carMake: string,
    carModel: string,
    vin: string) {
    return this.apollo.mutate({
      mutation: UPDATE_CAR,
      refetchQueries: [{ query: GET_ALL_CARS }],
      variables: {
        id: Number(id),
        firstName: firstName,
        lastName: lastName,
        email: email,
        carMake: carMake,
        carModel: carModel,
        vin: vin
      },
    })
  }

  getAllCars() {
    return this.apollo
      .watchQuery({
        query: GET_ALL_CARS,
      }).valueChanges;
  }

  getACar(id: number) {
    return this.apollo
      .watchQuery({
        query: GET_A_CAR,
        variables: {
          id: Number(id)
        }
      }).valueChanges;
  }
}
