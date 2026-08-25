import styles from './Profile.module.css'

function Profile({name, isDark, age}) {
    const dynamicStyle = {
        backgroundColor: isDark ? '#333' : '#f4f4f4',
        color: isDark ? '#fff' : '#000'
    }
    return (
        <div className={styles.card} style={dynamicStyle}>
        <h2>Foydalanuvchi Profili</h2>
        <hr />
        <h3>Ism: {name ? name : "Mehmon"}</h3>
        <h3 style={{color: age < 18 ? 'red' : 'green'}}>Yosh: {age ? age : "Kiritilmadi"}</h3>
        </div>
    )
}
export default Profile