let React = require('react');
let ReactBootstrap = require('react-bootstrap');
let Poetry = require('./Poetry');
let More = require('./More');
require('../index.css');

let Jumbotron = ReactBootstrap.Jumbotron,
Grid = ReactBootstrap.Grid,
Row = ReactBootstrap.Row,
Col = ReactBootstrap.Col,
Table = ReactBootstrap.Table;

const About = () => {
    return (
        <div id='about'>
            <h1 className='text-center lobsterfont'>Allama Muhammad Iqbal</h1>
            <h2 className='text-center lobsterfont text-color'>Poet of the East</h2>
            <p className='text-center fjallafont text-color'>Allama Muhammad Iqbal great poet, philosopher and visionary of the 20th century subcontinent. His poetry and philosophical works were an inspiration to the people of subcontinent specially the youth. His literary work is in English, Urdu and Persian.</p>
            <div className='text-center lobsterfont'>
                <h2>Here's the timeline of Allama Muhammad Iqbal's life:</h2>
            </div>
            <Row>
                <div className='table container'>
                    <table className='table table-hover'>
                        <thead className="fjallafont">
                            <tr>
                                <th className="text-center">Year</th>
                                <th className="text-center">Event</th>
                            </tr>
                        </thead>
                        <tbody className="droidsansfont">
                            <tr>
                                <td>November 9, 1877</td>
                                <td>Born at Sialkot</td>
                            </tr>
                            <tr>
                                <td>1881</td>
                                <td>Admitted in madressa to learn quran</td>
                            </tr>
                            <tr>
                                <td rowSpan="2">1893</td>
                                <td>Matriculated from Scotch Mission College Sialkot</td>
                            </tr>
                            <tr>
                                <td>Married Karim Bibi daughter of Khan Bahadur Ata Muhammad Khan</td>
                            </tr>
                            <tr>
                                <td rowSpan="2">1895</td>
                                <td>Completed the Intermediate Education from Murray College Sialkot</td>
                            </tr>
                            <tr>
                                <td>Enrolled at Government College Lahore</td>
                            </tr>
                            <tr>
                                <td rowSpan="2">1897</td>
                                <td>Received his Bachelors of Arts in Philosophy, Arabic and English Literature from Government College Lahore</td>
                            </tr>
                            <tr>
                                <td>Won the Khan Bahadur F. S. JaIaluddin Medal</td>
                            </tr>
                            <tr>
                                <td>1899</td>
                                <td>Did M.A in Philosophy</td>
                            </tr>
                            <tr>
                                <td>1901</td>
                                <td>Was appointed to teach English at Islamia College Lahore</td>
                            </tr>
                            <tr>
                                <td>1902</td>
                                <td>was appointed to teach English at Government College Lahore for six months</td>
                            </tr>
                            <tr>
                                <td rowSpan="2">1903</td>
                                <td>Appointed Assistant Professor of Philosophy at Government College Lahore</td>
                            </tr>
                            <tr>
                                <td>His first book "Ilmul Iqtisad" got published</td>
                            </tr>
                            <tr>
                                <td rowSpan="2">1905</td>
                                <td>Took study leave from Government College Lahore</td>
                            </tr>
                            <tr>
                                <td>Admitted to Trinity College Cambridge</td>
                            </tr>
                            <tr>
                                <td rowSpan="3">1907</td>
                                <td>Took the B.A Degree of Trinity College</td>
                            </tr>
                            <tr>
                                <td>Proceeded to Germany for further Education</td>
                            </tr>
                            <tr>
                                <td>Completed his Ph.D. thesis, "The Development of Metaphysics in Persia," during his stay at Heidelberg and Munich. Was awarded Ph. D. degree by the Munich University</td>
                            </tr>
                            <tr>
                                <td rowSpan="3">1908</td>
                                <td>Taught Arabic at University of London for sometime</td>
                            </tr>
                            <tr>
                                <td>Received a warm welcome from his fellow country on his return to India</td>
                            </tr>
                            <tr>
                                <td>The "Development of Metaphysics in Persia" was published</td>
                            </tr>
                            <tr>
                                <td>1909</td>
                                <td>Was appointed the Acting Professor of Philosophy at Government College, Lahore</td>
                            </tr>
                            <tr>
                                <td>1910</td>
                                <td>Recited his poem "Shikwa" in presence of his father, Sheikh Noor Mohammed, at the annual meeting of the Anjuman-i-Himayat-i-Islam</td>
                            </tr>
                            <tr>
                                <td>1912</td>
                                <td>Recited the poem -Shama aur Shair" at the annual meeting of tile Anjuman-i-Himayat-i-Islam</td>
                            </tr>
                            <tr>
                                <td rowSpan="2">1913</td>
                                <td>"Tarikh-e-Hind" was published-for which Iqbal collaborated with Lala Ram Prasad, Professor, Government College, Lahore</td>
                            </tr>
                            <tr>
                                <td>Iqbal recited the poem "Jawab-e-Shikwa" in a public meeting held at Bagh Bairoon-e- Mauchi Darwaza, Lahore</td>
                            </tr>
                            <tr>
                                <td rowSpan="3">1914</td>
                                <td>Married Sardar Begum (mother of Javed Iqbal) - his second marriage</td>
                            </tr>
                            <tr>
                                <td>Iqbal's mother, Imam Bibi, expired in Sialkot</td>
                            </tr>
                            <tr>
                                <td>Married Mukhtar Begum - his third marriage</td>
                            </tr>
                            <tr>
                                <td rowSpan="2">1915</td>
                                <td>Iqbal's daughter, Miraj Begum, born of his first wife, died</td>
                            </tr>
                            <tr>
                                <td>Asrar-e-Khudi was published</td>
                            </tr>
                            <tr>
                                <td rowSpan="2">1918</td>
                                <td>For some time Iqbal taught Philosophy at Islamia College, Lahore</td>
                            </tr>
                            <tr>
                                <td>Ramooz-e-Bekhudi was published</td>
                            </tr>
                            <tr>
                                <td>1920</td>
                                <td>The English Translation of Asrar-e-Khudi, by Professor Nicholson, was published in London</td>
                            </tr>
                            <tr>
                                <td>1921</td>
                                <td>Letter to Wahid Ahmad "The truth is that the European ethos made me a Muslim."</td>
                            </tr>
                            <tr>
                                <td rowSpan="2">1922</td>
                                <td>Iqbal recited the poem "Khizr-e-Rah" at the annual meeting of the Anjuman-i-Himayat-i-Islam</td>
                            </tr>
                            <tr>
                                <td>The first book on Iqbal "A Voice from the East" by Nawab Sir ZuIfiqar Ali, was published</td>
                            </tr>
                            <tr>
                                <td rowSpan="4">1923</td>
                                <td>Iqbal was awarded Knighthood by the British Government</td>
                            </tr>
                            <tr>
                                <td>Letter to Ghulam Bheck Nairang (in connexion with the award of Knighthood) "Such events are too low to arouse any feelings. I have received hundreds of letters and telegrams, and I am wondering why people regard these things as valuable... By the glorious. God... no power in the world can prevent me from speaking out the truth."</td>
                            </tr>
                            <tr>
                                <td>He recited the poem "Tulu-e-Islam" at the annual meeting of the Anjuman-e-Himayat-e-Islam</td>
                            </tr>
                            <tr>
                                <td>Payam-e-Mashriq was published</td>
                            </tr>
                            <tr>
                                <td rowSpan="3">1924</td>
                                <td>Bang-e-Dara was published</td>
                            </tr>
                            <tr>
                                <td>Javed Iqbal was born</td>
                            </tr>
                            <tr>
                                <td>His third wife, Mukhtar Begum, died in Ludhiana</td>
                            </tr>
                            <tr>
                                <td rowSpan="2">1926</td>
                                <td>Iqbal was elected member of the 'Punjab Legislative Assembly</td>
                            </tr>
                            <tr>
                                <td>The first Urdu book on Iqbal "Iqbal" by Maulvi Ahmaduddin Vakil, was published</td>
                            </tr>
                            <tr>
                                <td rowSpan="2">1927</td>
                                <td>The Persian Text Book for High School students "Aina-e-Ajam" was published</td>
                            </tr>
                            <tr>
                                <td>Zaboor-e-Ajam was published</td>
                            </tr>
                            <tr>
                                <td rowSpan="2">1929</td>
                                <td>His name was proposed for the post of Judge, Punjab High Court, but he was not appointed owing to the opposition of the Chief Justice</td>
                            </tr>
                            <tr>
                                <td>He attended a meeting of the Union of the Aligarh Intermediate College</td>
                            </tr>
                            <tr>
                                <td rowSpan="3">1930</td>
                                <td>Iqbal's father, Sheikh Noor Mohammed, died</td>
                            </tr>
                            <tr>
                                <td>The collection of his English lectures, Six Lectures on the Reconstruction of Religious Thought in Islam was published</td>
                            </tr>
                            <tr>
                                <td>He presented the concept of a federation of the Muslim Majority Provinces at the annual meeting of the All India Muslim League held at Allahabad</td>
                            </tr>
                            <tr>
                                <td rowSpan="8">1931</td>
                                <td>Attended the All Parties Muslim Conference held at Delhi</td>
                            </tr>
                            <tr>
                                <td>Proceeded to London to attend the Second Round Table Conference</td>
                            </tr>
                            <tr>
                                <td>He participated in the Round Table Conference from 28 September to 20 November, and then departed from London</td>
                            </tr>
                            <tr>
                                <td>Arrived at Rome; was received by Dr. Scarpa, the Ex-Consul General of Italy in India, who was his great admirer</td>
                            </tr>
                            <tr>
                                <td>Met Mussolini and gave him the following advice "Turn away from Europe towards the East."</td>
                            </tr>
                            <tr>
                                <td>Arrived at Alexandria and met the members of the Shabanul Muslimin Society; arrived at Cairo in the evening; stayed at the Metropolitan Hotel; met Egyptian scholars and nobles; went to see the Pyramids</td>
                            </tr>
                            <tr>
                                <td>Reached Jerusalem; stayed at the Grand Hotel; attended the Inaugural Session of the Motamar Alam-e-Islami</td>
                            </tr>
                            <tr>
                                <td>Was elected the Vice-President of the Motamar</td>
                            </tr>
                            <tr>
                                <td rowSpan="4">1932</td>
                                <td>The first Iqbal Day was celebrated under the auspices of the Islamic Research Institute, Lahore, at Y.M.C.A. Hall</td>
                            </tr>
                            <tr>
                                <td>Maulana Anwar Shah Kashmiri called on him</td>
                            </tr>
                            <tr>
                                <td>Iqbal proceeded to London to attend the Third Round Table Conference</td>
                            </tr>
                            <tr>
                                <td>After participating in the Conference he left London</td>
                            </tr>
                            <tr>
                                <td rowSpan="4">1933</td>
                                <td>Reached Spain in the first week of the month. Visited Masjid-e-Qartaba "My visit to the Mosque elevated me to such a height of feeling as I had never attained to before" (Letter to Sheikh Mohd. Akram)</td>
                            </tr>
                            <tr>
                                <td>On the invitation of King Nadir Shah a three member delegation proceeded to Afghanistan; it consisted of Iqbal, Syed Sulaiman Nadvi and Sir Ross Masood Barrister Ghulam Rasool accompanied Iqbal as his Secretary and Ali Baksh as his servant</td>
                            </tr>
                            <tr>
                                <td>Met King Nadir Shah of Afghanistan</td>
                            </tr>
                            <tr>
                                <td>Was awarded D.Litt. degree by the Punjab University. Was the first Indian to get this Degree</td>
                            </tr>
                            <tr>
                                <td>1934</td>
                                <td>On Eid Day, the weather being very cold, Iqbal took Sivayyan with curd. He got throat trouble-the beginning of his long illness</td>
                            </tr>
                            <tr>
                                <td rowSpan="2">1935</td>
                                <td>Bal-e-Jibril was published</td>
                            </tr>
                            <tr>
                                <td>His wife (mother of Javed Iqbal) died</td>
                            </tr>
                            <tr>
                                <td rowSpan="2">1936</td>
                                <td>Zarb-e-Kalim was published</td>
                            </tr>
                            <tr>
                                <td>Mr Mohammad Ali Jinnah came to Lahore to meet him. Iqbal was elected the President of the Punjab Muslim League</td>
                            </tr>
                            <tr>
                                <td>1937</td>
                                <td>Letter to Ross Masood "It was my intention to visit the shrine of the Holy Prophet this year; but certain circumstances have prevented me. I hope that next year I shall be doing Haj and also presenting myself at the shrine of the Holy Prophet."</td>
                            </tr>
                            <tr>
                                <td>1938</td>
                                <td>Iqbal died at Javed Manzil. at 5-15 a.m., 21st April</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Row>
        </div>
    )
};

module.exports = About;
