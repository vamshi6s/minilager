import AccordionExampleStyled from '../components/unitsfilter/UnitsFilter'
import DropdownExampleSelection from '../components/dropdown/Dropdown'
import { useNavigate } from 'react-router-dom'

const Units = () => {
    const navigate=useNavigate()
    const tenantTypeOptions = [
        {
          key: 1,
          text: 'Personal User',
          value: 1
        },
        {
          key: 2,
          text: 'Business User',
          value: 2,
        },
      ]
      
      const storageTypeOptions = [
          {
            key: 1,
            text: 'All',
            value: 1
          },
          {
            key: 2,
            text: 'Units',
            value: 2,
          },
        ]
        const rentNow=(e)=>{
            e.preventDefault();
            navigate('/preBooking/rentingDetails')
        }

    return (
        <div className="units-wrapper">
            <div className="container">
                <div className="units-banner">
                    <img className='w-100' src='/assets/images/rentnow-img.png' alt="Storage Units"/>
                </div>
                <div className="units-row">
                    <div className="row">
                        <div className="col-lg-3">
                            <div className="filters-div">
                                <AccordionExampleStyled />
                            </div>
                        </div>
                        <div className="col-lg-9">
                            <div className="units-container-div">
                                <div className='dropdown-div mx-auto'>
                                    <h2 className='text-center'>Find Your Storage Place</h2>
                                    <div className='row'>
                                        <div className='col-lg-6'>
                                            <DropdownExampleSelection options={tenantTypeOptions} placeholderText="Choose Tenant Type" />
                                        </div>
                                        <div className='col-lg-6'>
                                            <DropdownExampleSelection options={storageTypeOptions} placeholderText="Choose Storage Type" />
                                        </div>
                                    </div>
                                </div>
                                <div className='units-div'>
                                    <div className='row'>
                                        <div className='col-lg-4 px-2'>
                                            <div className='card'>
                                                <div className='card-img text-center position-relative'>
                                                    <img src='/assets/images/units.png' alt='Units' />
                                                    <p className='position-absolute t-2 r-0'>1 MONTH FREE</p>
                                                </div>
                                                <div className='card-body'>
                                                    <div className='card-title'>
                                                        <div className='row align-items-center'>
                                                            <div className='col-lg-8'>
                                                                <h2 className='fw-700 mb-1'>5x5 <small className='fw-500'>Small</small></h2>
                                                                <div className='d-flex align-items-start'>
                                                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 13.68 18.951">
                                                                        <path id="Location_" data-name="Location " d="M-233.385-421.251a6.829,6.829,0,0,1,1.987-4.839,6.641,6.641,0,0,1,3.848-1.94,6.643,6.643,0,0,1,4.759,1.054,6.62,6.62,0,0,1,2.866,4.039,6.635,6.635,0,0,1-.878,5.358q-2.546,4-5.12,7.978c-.034.052-.065.1-.1.156a.618.618,0,0,1-1.046,0c-.19-.271-.363-.556-.539-.835q-2.357-3.678-4.712-7.357A6.543,6.543,0,0,1-233.385-421.251Zm9.946-.024a3.118,3.118,0,0,0-3.114-3.107,3.118,3.118,0,0,0-3.1,3.1,3.119,3.119,0,0,0,3.1,3.117,3.118,3.118,0,0,0,3.113-3.11Z" transform="translate(233.386 428.108)" fill="#67be5c" />
                                                                    </svg>
                                                                    <span>The cove, The Country of the east</span>
                                                                </div>
                                                            </div>
                                                            <div className='col-lg-4 units-left'>
                                                                <p>Only 3 Units left</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='card-desc'>
                                                        <div className='d-flex flex-wrap'>

                                                            <div className='d-flex align-items-center'>
                                                                <svg id="Fully_automated" data-name="Fully automated" xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16.723 16.437">
                                                                    <path id="Path_17536" data-name="Path 17536" d="M241.438,119.189c-.048.327-.082.658-.148.981a7.957,7.957,0,0,1-2.1,3.948,9.023,9.023,0,0,1-3.064,2.118l-.153.064c.155.07.286.127.415.188.178.083.234.21.168.366a.263.263,0,0,1-.381.129q-.509-.22-1.013-.448a.273.273,0,0,1-.131-.439q.3-.468.606-.929a.272.272,0,0,1,.394-.1.268.268,0,0,1,.058.389c-.049.081-.1.16-.153.24l.027.035c.311-.161.631-.308.932-.487a8,8,0,0,0,3.7-4.568,6.981,6.981,0,0,0-.136-4.484c-.021-.062-.046-.122-.065-.184a.273.273,0,0,1,.165-.371.269.269,0,0,1,.343.194,9.43,9.43,0,0,1,.3.98c.091.418.139.846.206,1.269.008.053.019.105.029.158v.947Z" transform="translate(-224.716 -110.581)" fill="#328128" />
                                                                    <path id="Path_17537" data-name="Path 17537" d="M75.651,73.828c-.417.157-.783.291-1.146.434a.16.16,0,0,0-.078.116c-.01.13,0,.261,0,.391a.628.628,0,0,1-.668.661c-.321,0-.642-.005-.962-.027a.564.564,0,0,1-.521-.551c-.007-.152,0-.3-.008-.457a.177.177,0,0,0-.089-.122q-.49-.217-.988-.418a.16.16,0,0,0-.136.017c-.1.084-.187.182-.28.274a.617.617,0,0,1-.881.031,9.452,9.452,0,0,1-.671-.69.626.626,0,0,1,.033-.86c.12-.125.246-.245.343-.341-.148-.4-.285-.765-.429-1.133a.144.144,0,0,0-.107-.066c-.141-.008-.283,0-.424,0A.627.627,0,0,1,68,70.454q-.01-.449,0-.9a.625.625,0,0,1,.637-.626c.163,0,.325,0,.456,0,.17-.374.334-.727.489-1.084a.16.16,0,0,0-.032-.135c-.081-.095-.175-.178-.263-.268a.619.619,0,0,1-.025-.893c.216-.229.445-.448.681-.657a.62.62,0,0,1,.847.017c.113.1.214.218.328.318a.155.155,0,0,0,.134.025c.359-.151.716-.309,1.1-.478,0-.121,0-.284,0-.446a.634.634,0,0,1,.669-.681c.277,0,.555,0,.832,0a.616.616,0,0,1,.635.627c.006.141-.005.284.006.424a.174.174,0,0,0,.082.127c.355.147.713.287,1.115.446.08-.086.185-.21.3-.324a.621.621,0,0,1,.881-.016c.226.212.443.435.649.666a.629.629,0,0,1-.027.885c-.116.122-.3.229-.33.367s.126.286.185.436c.081.2.155.406.219.613.029.094.069.131.168.125.141-.008.283-.005.424,0a.621.621,0,0,1,.617.612q.011.457,0,.914a.623.623,0,0,1-.626.622c-.125,0-.25.006-.375,0a.152.152,0,0,0-.175.12q-.182.47-.394.928a.137.137,0,0,0,.034.194c.089.079.171.167.255.253a.612.612,0,0,1,.033.868,8.3,8.3,0,0,1-.716.691.617.617,0,0,1-.833-.04c-.129-.124-.243-.263-.329-.356ZM73.341,74.9c.12,0,.24,0,.359,0s.188-.04.182-.179c-.01-.206,0-.414,0-.62a.271.271,0,0,1,.252-.306,3.906,3.906,0,0,0,1.323-.534.283.283,0,0,1,.408.054c.144.141.29.28.426.428.09.1.162.1.257.007q.257-.262.528-.511c.09-.082.087-.148,0-.23-.142-.135-.279-.275-.417-.415a.283.283,0,0,1-.05-.42,3.94,3.94,0,0,0,.544-1.284.283.283,0,0,1,.323-.256c.2,0,.4,0,.6,0,.119,0,.168-.042.165-.162,0-.245-.006-.49,0-.735,0-.137-.055-.183-.186-.179-.218.006-.435,0-.653,0a.265.265,0,0,1-.291-.23,3.822,3.822,0,0,0-.536-1.339.277.277,0,0,1,.054-.407c.149-.151.3-.3.451-.449a.126.126,0,0,0,0-.208c-.18-.182-.359-.365-.533-.552-.084-.091-.151-.081-.231,0-.14.145-.283.287-.427.427a.269.269,0,0,1-.394.045,4.1,4.1,0,0,0-1.3-.553c-.2-.047-.257-.129-.259-.335s0-.425,0-.637c0-.1-.035-.139-.134-.138q-.384,0-.767,0c-.11,0-.155.045-.152.158.006.223,0,.446,0,.669a.276.276,0,0,1-.242.3,3.839,3.839,0,0,0-1.34.535.272.272,0,0,1-.394-.048c-.148-.144-.3-.289-.439-.439-.084-.088-.153-.1-.245-.01-.176.178-.357.351-.541.521a.127.127,0,0,0,0,.218c.141.135.279.275.416.415a.29.29,0,0,1,.051.434,3.914,3.914,0,0,0-.538,1.269c-.044.2-.128.261-.334.264s-.4,0-.6,0c-.11,0-.158.041-.156.154,0,.25.005.5,0,.751,0,.13.054.171.178.167.207-.007.414,0,.62,0,.188,0,.274.069.31.247a3.909,3.909,0,0,0,.535,1.323.281.281,0,0,1-.051.408c-.141.144-.281.289-.429.425-.1.089-.107.16-.008.256.175.171.346.347.512.527.082.089.148.089.231,0,.14-.145.283-.286.428-.427a.275.275,0,0,1,.394-.049,4.055,4.055,0,0,0,1.314.556c.178.041.239.128.24.316,0,.207,0,.414,0,.62,0,.1.044.15.147.148.13,0,.261,0,.392,0Z" transform="translate(-65.026 -61.824)" fill="#328128" />
                                                                    <path id="Path_17538" data-name="Path 17538" d="M.819,109.062c-.159.078-.279.14-.4.2a.27.27,0,0,1-.387-.114.262.262,0,0,1,.147-.363q.5-.258,1-.506a.269.269,0,0,1,.4.141q.248.532.483,1.07a.253.253,0,0,1-.134.366.26.26,0,0,1-.36-.154c-.038-.078-.071-.159-.107-.238s-.069-.147-.112-.242c-.024.051-.044.086-.058.122a8.655,8.655,0,0,0-.517,1.832,5.315,5.315,0,0,0,.089,1.85,7.558,7.558,0,0,0,5.282,5.893,7.244,7.244,0,0,0,2.508.353.691.691,0,0,1,.211.01.265.265,0,0,1-.086.518c-.435-.011-.873,0-1.3-.05A8.248,8.248,0,0,1,.252,112.6a6.7,6.7,0,0,1,.486-3.3c.024-.065.045-.13.081-.234Z" transform="translate(-0.002 -103.512)" fill="#328128" />
                                                                    <path id="Path_17539" data-name="Path 17539" d="M56.178,3.159c0-.14,0-.237,0-.334a.275.275,0,0,1,.262-.28.264.264,0,0,1,.275.265c.011.391.014.783.009,1.175a.28.28,0,0,1-.294.271q-.612.009-1.224,0a.264.264,0,0,1-.284-.272.27.27,0,0,1,.3-.269c.221,0,.442,0,.7,0-.133-.157-.236-.288-.348-.409A8.23,8.23,0,0,0,50.352.594,7.542,7.542,0,0,0,43.51,3.316c-.043.049-.081.1-.124.151a.274.274,0,0,1-.39.061.268.268,0,0,1-.024-.4c.126-.157.253-.314.391-.459A8.047,8.047,0,0,1,50.01.022a8.831,8.831,0,0,1,6.03,2.985l.137.151Z" transform="translate(-41.021 0)" fill="#328128" />
                                                                    <path id="Path_17540" data-name="Path 17540" d="M135.92,136.414a2.421,2.421,0,0,1,2.437-2.388.9.9,0,0,1,.24.037.226.226,0,0,1,.173.246.221.221,0,0,1-.193.229c-.171.026-.346.028-.517.055a1.851,1.851,0,0,0-1.566,2.15,1.9,1.9,0,0,0,2.191,1.494,1.844,1.844,0,0,0,1.388-2.631c-.082-.181-.042-.335.1-.4s.291-.007.383.173a2.388,2.388,0,0,1-1.638,3.368,2.435,2.435,0,0,1-2.968-1.972c-.021-.117-.022-.238-.032-.357Z" transform="translate(-129.989 -128.178)" fill="#328128" />
                                                                    <path id="Path_17541" data-name="Path 17541" d="M210.129,140.148a.274.274,0,0,1-.391.284,2.226,2.226,0,0,1-.29-.182.259.259,0,0,1-.072-.348.239.239,0,0,1,.321-.112,1.787,1.787,0,0,1,.345.213A.4.4,0,0,1,210.129,140.148Z" transform="translate(-200.204 -133.666)" fill="#328128" />
                                                                </svg>
                                                                <span>Fully automated</span>
                                                            </div>

                                                            <div className='d-flex align-items-center'>
                                                                <svg id="Variety_of_sizes" data-name="Variety of sizes" xmlns="http://www.w3.org/2000/svg" width="16" height="14" viewBox="0 0 16.416 16.415">
                                                                    <path id="Path_17562" data-name="Path 17562" d="M0,8.206Q0,5.172,0,2.138A2.049,2.049,0,0,1,1.6.063,2.475,2.475,0,0,1,2.156.007q6.047,0,12.1,0A2.062,2.062,0,0,1,16.415,2.17q0,6.038,0,12.076a2.064,2.064,0,0,1-2.176,2.173q-6.027,0-12.055,0A2.067,2.067,0,0,1,0,14.234Q0,11.22,0,8.206Zm.827.011c0,2,.018,4.005-.009,6.008A1.316,1.316,0,0,0,2.2,15.6q6.008-.029,12.016,0A1.313,1.313,0,0,0,15.6,14.236c-.018-4.019-.007-8.038-.009-12.056A1.228,1.228,0,0,0,14.251.832q-6.048,0-12.1,0a1.675,1.675,0,0,0-.377.032,1.218,1.218,0,0,0-.95,1.265q0,3.044,0,6.088Z" transform="translate(0.001 -0.005)" fill="#328128" />
                                                                    <path id="Path_17563" data-name="Path 17563" d="M47.5,187.3h.235c.66,0,1.321,0,1.982,0,.287,0,.469.161.471.4s-.176.408-.465.408q-1.582,0-3.163,0c-.321,0-.467-.144-.468-.464q0-1.582,0-3.163c0-.291.159-.468.406-.468a.413.413,0,0,1,.408.467c0,.66,0,1.321,0,1.982v.238c.081-.074.134-.119.183-.168l2.293-2.293a1.413,1.413,0,0,1,.162-.149.405.405,0,0,1,.569.561,1.242,1.242,0,0,1-.147.163l-2.293,2.293c-.05.05-.1.1-.175.187Z" transform="translate(-43.626 -174.172)" fill="#328128" />
                                                                    <path id="Path_17564" data-name="Path 17564" d="M186.7,46.928h-1.576c-.207,0-.414,0-.62,0a.41.41,0,0,1-.444-.411.4.4,0,0,1,.451-.4c.34,0,.681,0,1.021,0q1.06,0,2.122,0c.362,0,.5.135.5.49q0,1.561,0,3.122c0,.306-.158.486-.412.483s-.4-.187-.4-.493q0-.981,0-1.962v-.235c-.086.08-.138.127-.187.177l-2.293,2.292a.955.955,0,0,1-.2.168.38.38,0,0,1-.478-.064.389.389,0,0,1-.068-.494,1.042,1.042,0,0,1,.156-.181q1.146-1.147,2.293-2.292a1.349,1.349,0,0,1,.178-.129l-.044-.068Z" transform="translate(-174.206 -43.645)" fill="#328128" />
                                                                </svg>
                                                                <span>Variety of sizes</span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className='card-charges'>
                                                        <p>Loading And Unloading Charges</p>
                                                    </div>
                                                    <div className='card-text'>
                                                        <p>This Unit consists of individual enclosed compartments for storing goods or materials (other than hazardous or offensive goods or materials).</p>
                                                    </div>
                                                    <div className='card-actions'>
                                                        <div className='d-flex justify-content-between'>
                                                            <h2>$47.00</h2>
                                                            <button className='ui button btn-success'onClick={e=>rentNow(e)}>Rent Now</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                </div>   
            </div>
        </div>
    )
}

export default Units;