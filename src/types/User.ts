import type Identifyable from "./Identifyable"

export default interface User extends Identifyable {
  name: String, 
  email: String,
  profile_picture_url: String,
  email_verified_at: String,
  identification_number: String,
  current_organisation: {
    id: Number,
    name: String,
    logo_url: String,
    is_personal: Boolean
  }
};  
