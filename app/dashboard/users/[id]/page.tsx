import React from 'react'
import  Image  from 'next/image';
import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css"

export default function SingleUserPage() {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.imgContainer}>
          <Image src="/noavatar/jpg" alt="user" fill/>
        </div>
        John Doe
      </div>
      <div className={styles.formContainer}>
      <form className={styles.form}>
      <label>Username</label>
      <input type="text" name="username" placeholder="username"/>
      <label>Email</label>
      <input type="email" name="email" placeholder="email" />
      <label>Password</label>
      <input type="password" name="password" placeholder="password" />
      <label>Address</label>
      <textarea type="text" name="address" placeholder="address"></textarea>
      <label>Is admin?</label>
      <select name="isAdmin" id="isAdmin">
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>
      <label>Is active?</label>
      <select name="isActive" id="isActive">
        <option value={true}>Yes</option>
        <option value={false}>No</option>
      </select>
      <button>Update</button>
      </form>
      </div>
    </div>
  )
}
