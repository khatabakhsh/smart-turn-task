export interface InHouseResponse {
  message: string;
  data: {
    list: Record<string, InHouseData>;
  };
}

export interface InHouseData {
  cabin: Cabin;
  size_type: string;
  company_name: string;
  empties: Empty[];
  exports: Export[];
  containers_count: number;
  exports_count: number;
}

export interface Cabin {
  id: number;
  specification_id: number;
  company_id: number;
  container_number: string | null;
  company: Company;
  specifications: Specification;
}

export interface Company {
  id: number;
  name: string;
  alias: string;
  email: string | null;
  phone: string | null;
  address: string | null;
  created_at: string | null;
  updated_at: string | null;
}

export interface Specification {
  id: number;
  size: number;
  name: string;
  model: string;
  created_at: string | null;
  updated_at: string | null;
  size_type: string;
}

export interface Empty {
  id: number;
  cabin_id: number;
  address_id: number;
  count: number;
  count_available: number;
  own_available: number;
  pool_available: number;
  container_numbers: number;
  status: number;
  available_at: string;
  created_at: string;
  updated_at: string;
  deleted_at: string | null;
  flip_available: number;
  own_chases_count: number;
  pool_chases_count: number;
  containers_count: number;
  count_all: number;
  has_containers: number;
  containers: Container[];
  address: Address;
  cabin: Cabin;
}

export interface Address {
  id: number;
  lat: number;
  long: number;
  address: string;
  city: string;
}

export interface Container {
  id: number;
  name: string;
  chases: string;
  own_chases: number;
  inventory_id: number;
  cabin_id: number;
  company_id: number;
  specification_id: number;
  user_id: number;
  create_type: string;
  order_id: number | null;
  order_mode: string;
  booking_id: number | null;
  match_time: string | null;
  status: number;
  used: boolean | null;
  keep_in_history: number;
  status_message: string | null;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  added_date: string;
  additional: string | null;
  gated_in: string | null;
  gated_out: string | null;
  return_appointment: string | null;
  return_terminal_id: number | null;
  last_free_day: string;
  est_per_diem: number;
  disputable_days: number | null;
  disputable_amount: number | null;
  scr_last: string;
  scr_next: string;
  return_terminals: string;
  return_dual_terminals: string;
  suggested_booking_id: number;
  suggested_booking_saving: number;
  savings: Record<string, string>;
}

export interface Export {
  id: number;
  user_id: number;
  cabin_id: number;
  address_id: number;
  count: number;
  count_filled: number;
  status: number;
  wanna_till: string;
  with_flip: number;
  wanna_own: number;
  wanna_pool: number;
  own_filled: number;
  pool_filled: number;
  deleted_at: string | null;
  created_at: string;
  updated_at: string;
  bookings_count: number;
  available_at: string;
  address: Address;
  cabin: Cabin;
  bookings: Booking[];
}

export interface Booking {
  id: number;
  name: string;
  export_id: number;
  user_id: number;
  create_type: string;
  order_id: number | null;
  container_id: number | null;
  match_time: string | null;
  status: number;
  status_message: string | null;
  additional: {
    mto: string | null;
    api_checked: boolean;
    pickup_date: string | null;
  };
  created_at: string;
  updated_at: string;
  container: Container | null;
  chassis: string | null;
  gated_out: string | null;
  gated_in: string | null;
  vessel_name: string | null;
  vessel_code: string | null;
  vessel_voyage_in: string | null;
  vessel_voyage_out: string | null;
  vessel_departure: string | null;
  appointment: string;
  load_pickup_date: string;
  erd: string | null;
  cutoff: string | null;
  get_empty_from_terminal_string: string | null;
  get_empty_from_terminal_id: number | null;
  return_to_terminal_id: number | null;
  scr_last: string;
  scr_next: string;
  suggested_container_id: number;
  suggested_container_saving: number;
  pick_up_location: string | null;
  return_to_terminal: string | null;
}
