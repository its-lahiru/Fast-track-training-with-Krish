import { gql } from "apollo-server-express";

// filter car by car model
export const QUERY_GET_ALL_CARS_FILTERED = gql`query($first: Int, $offset: Int, $carModel: String, $orderBy: [CarsOrderBy!]) {
  allCars(
    first: $first
    offset: $offset
    orderBy: $orderBy
    filter: { carModel: { startsWith: $carModel } }
  ) {
    nodes {
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
    totalCount
  }
}`;

// get all cars
export const QUERY_GET_ALL_CARS = gql`query{
  allCars{
    nodes {
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
    totalCount
  }
}`;

// get a car
export const QUERY_GET_A_CAR = gql`query($id: Int!) {
  carById(id: $id){
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
}`;

// patch car details
export const QUERY_UPDATE_CAR = gql`mutation(
  $id: Int!
  $firstName: String
  $lastName: String
  $email: String
  $carMake: String
  $carModel: String
  $vin: String
) {
  updateCarById(
    input: {
      id: $id
      carPatch: {
        firstName: $firstName
        lastName: $lastName
        email: $email
        carMake: $carMake
        carModel: $carModel
        vin: $vin
      }
    }
  ) {
    car {
      id
      firstName
      lastName
      email
      carMake
      carModel
      vin
    }
  }
}`;

// delete by car id
export const QUERY_DELETE_CAR = gql`mutation($id: Int!) {
  deleteCarById(input: { id: $id }) {
    car {
      id
    }
  }
}`;
