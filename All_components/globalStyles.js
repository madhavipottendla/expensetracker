import { StyleSheet ,  } from 'react-native';

export const globalStyles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
        backgroundColor: '#FFFFFF',
      },
      darkContainer: {
        backgroundColor: '#000000',
      },
      item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        fontSize: 18,
        height: 60,
      },
      itemText: {
        fontSize: 18,
        color: 'black', // Default text color
      },
      darkText: {
        color: 'white', // Text color in dark mode
      },
      itemWithIcon: {
        display: 'flex',
        flexDirection: 'row',
      },
      itemTextright: {
        paddingRight: 5,
        paddingLeft: 5,
        fontSize: 12,
        color: 'grey',
        paddingTop: 4,
        opacity: 0.7,
      },
    //   Container Home CSS
     containerHomeSetting:{
        flex: 1, alignItems: 'center', justifyContent: 'center' },
    //   Detail normal and dark mode
    darkitemText:{
        color:'#ffffff'
    },
    // Language normal and dark css
    containerScroll: {
       paddingRight: 10, 
        paddingLeft: 10,
      },
    //   Notification dark and normal css
    containerNotification: {
        flex: 1,
        paddingRight: 10,
        paddingLeft: 10,
        paddingTop:20
    
      },
      itemno: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        fontSize: 18,
        height: 60,
        marginBottom:20
      },
      smallText: {
        fontSize: 14,
        color: '#888',
     },
      toggleIcon: {
        fontSize: 36, 
      },

      // Profile css ----------------------------start
      containerProfile: {
        flex: 1,
        padding: 25,
        position: 'relative',
        backgroundColor:'#F6F6F6'
      },
      profileContainerpr: {
        marginBottom: 20,
      },
      profileInfopr: {
        flexDirection: 'row',
        alignItems: 'center',
      },
      profileImage: {
        width: 90,
        height: 90,
        borderRadius: 50,
        marginRight: 10,
        borderColor:'#AD00FF',
        borderWidth:3
      },
      userInfopr: {
        flexDirection: 'row',
        alignItems: 'center',
        flex: 1,
      },
      usernamepr: {
        fontSize: 26,
        fontWeight: 'bold',
        marginRight: 10,
      },
      pencil: {
        position: 'absolute',
        right:0
      },
      DownICON4:{
      backgroundColor:'#EEE5FF',
      padding:8,
      borderRadius:10,
      marginRight:13
      },
      DownICON4L:{
        backgroundColor:'#FFE2E4',
        padding:8,
        borderRadius:10,
        marginRight:13
        },
        menuprofile4:{
        fontSize:18
       
        },
      menuContainerpr: {
        // borderWidth: 1,
        paddingLeft: 15,
        paddingTop:20,
        paddingBottom:20,
        borderRadius:20,
        paddingRight:15,
        // borderColor:'grey'
        backgroundColor:'#fff'


      
     
      },
      menuItempr: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 15,
        borderBottomColor:'grey',
      },

      // dark mode for profile
      usernameprofile:{
        color:'grey'
      },
      usernameprDark:{
        color:'#FFFFFF'
      },
      menuContainerprDark:{
        backgroundColor:'grey'
      },
      // modal
      modalViewDark:{
      backgroundColor:'grey'
      },
      messageTextDark:{
        color:'#FFFFFF'
      },

      // <------------------------SignupCarousel  Start---------------------------------------------------->
      Onbordingcontainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#FFFFFF'
      },
      Onbordingsiglogbtn: {
        width: '100%', // Ensure the parent container takes up 100% width
        justifyContent: 'center',
        alignItems: 'center',
      },
      Onbordingsignin: {
        width: '90%', 
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#7F3DFF',
        paddingVertical: 20,
        borderRadius: 20,
        marginBottom: 10,
      },
      Onbordingsignintxt: {
        color: '#FFFFFF',
        fontWeight: '600',
        fontSize:17,
      },
      Onbordinglogin: {
        width: '90%', 
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 20,
        marginBottom: 10,
        backgroundColor: '#EEE5FF',
        marginBottom: 20
      },
      Onbordinglogintxt: {
        color: '#7F3DFF',
        fontWeight: '600',
        fontSize:17,
      },
      onboardingdot: {
        height: 10,
        borderRadius: 5,
        backgroundColor: '#7F3DFF',
        marginHorizontal: 8,
      },
      Onbordingcontainer1: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10
      },
      Onbordingimage: {
        flex: 0.4,
        justifyContent: 'center',
        alignItems: 'center',
      },
      OnbordingtextContainer: {
        flex: 0.3,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 5
      },
      Onbordingtitle: {
        width: 277,
        fontWeight: '700',
        fontSize: 32,
        color: '#212325',
        textAlign: 'center',
        lineHeight: 39,
      },
      Onbordingdescription: {
        fontWeight: '500',
        color: '#91919F',
        textAlign: 'center',
        paddingHorizontal: 32,
        fontSize: 16,
        lineHeight: 19.36,
        width: 320
      },
    // <------------------------SignupCarousel End---------------------------------------------------->
    
     // <------------------------SetupAcount Start---------------------------------------------------->
     containerSetupAccount: {
      flex: 1,
      backgroundColor: 'white',
      padding: 20,
      justifyContent: 'center',
      alignItems: 'flex-start',
    },
    scrollContainerSetupAccount: {
      flexGrow: 1,
    },
    headingContainerSetupAccount: {
      marginBottom: 35,
    },
    headingSetupAccount: {
      fontSize: 40,
      // fontWeight: 'bold',
      textAlign: 'left',
    },
    contentContainerSetupAccount: {
      marginBottom: 40,
    },
    contentSetupAccount: {
      fontSize: 16,
      textAlign: 'left',
    },
    buttonSetupAccount: {
      position: 'absolute',
      bottom: 20,
      left: 20,
      right: 20,
      backgroundColor: '#7f3dff',
      paddingVertical: 15,
      alignItems: 'center',
      borderRadius: 8,
    },
    buttonTextSetupAccount: {
      fontSize: 18,
      color: 'white',
      fontWeight:'600'
    },
  
      


     // <------------------------SetupAcount End---------------------------------------------------->

      // <------------------------NewAccount Strat---------------------------------------------------->
      NewAccountcontainer: {
        flex: 1,
        backgroundColor: '#7F3DFF',
        justifyContent:'left',
        alignItems:'flex-start'

      },
      
      NewAccountBalancePaisa:{
        position:'absolute',
        bottom:290,
        zIndex:1,
        paddingHorizontal:20
      },
      NewAccountBalance:{
       fontSize:20,
       color:'#FFFFFF'
      },
      NewAccountpaisa: {
        color: 'white',
        fontWeight: '600',
        fontSize: 60,
   
      },
      NewAccountbox: {
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 23, 
        borderTopRightRadius: 23, 
        borderWidth: 1, 
        borderColor: 'gray',
        position:'absolute',
        width:'100%',
        bottom:0,
        
      },
      NewAccountInput: {
        paddingVertical: 16,
        paddingHorizontal: 16,
        marginHorizontal:20,
        marginVertical:35,
        color: 'black',
        borderWidth: 1, 
        borderRadius: 8,
        marginBottom: 10,
        borderColor: 'lightgrey', 
      },
      NewAccounttypeDropdown: {
     
        paddingVertical: 18,
        paddingHorizontal: 16,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        color: 'black',
        borderWidth: 1, 
        borderColor: 'lightgrey', 
        borderRadius: 8,
        margin:20,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
      },
      NewAccounttypeText: {
        color: 'black',
      },
      
      NewAccountdropdownItem: {
        paddingVertical: 12,
        paddingHorizontal: 36,
      },
      NewAccountcontinueButton: {
        backgroundColor: '#7F3DFF',
        borderRadius: 8,
        paddingVertical: 15,
        marginHorizontal: 16,
        alignItems: 'center',
      
      
        marginBottom:20,
       
      },
      NewAccountcontinueButtonText: {
        color: 'white',
        fontSize: 18,
      },
       // <------------------------NewAccount End---------------------------------------------------->


        // <------------------------Wallet Start---------------------------------------------------->
        Walletcontainer: {
          flex: 1,
          backgroundColor: '#7F3DFF',
          justifyContent:'left',
          alignItems:'flex-start'
        },
        WalletBalancepaisa:{
        position:'absolute',
        bottom:290,
        zIndex:1,
        paddingHorizontal:20
        },
       
        
        WalletBalance: {
          fontSize:20,
          color:'#FFFFFF'
        },
        Walletpaisa: {
          color: 'white',
          fontWeight: '600',
          fontSize: 64,
        
        },
        Walletbox: {
          backgroundColor: '#FFFFFF',
          borderTopLeftRadius: 22,
          borderTopRightRadius: 22,
          borderWidth: 1,
          borderColor: 'gray',
          width:'100%',
          position:'absolute',
          bottom:0,
        
        
        },
        WalletName: {
       
          paddingVertical: 16,
          paddingHorizontal: 16,
          marginHorizontal:20,
          marginVertical:35,
          color: 'black',
          borderWidth: 1, 
          borderRadius: 8,
          marginBottom: 10,
          borderColor:'lightgrey',
        },
        Walletcaret:{
        fontSize:20,
        // color:'black,'
        },
        WallettypeDropdown: {
          paddingVertical: 18,
          paddingHorizontal: 16,
          // color: 'black',
          borderWidth: 1, 
          borderColor:'lightgrey', 
          borderRadius: 8,
          margin:20,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        WallettypeText: {
          // color: 'black',
        },
        Walletdropdown: {
          maxHeight: 170,
          borderWidth: 1,
          borderColor:'lightgrey',
          borderRadius: 8,
          margin:20,
          position:'relative',
          paddingVertical:20,
        },
        WalletdropdownItem: {
          flexDirection: 'row',
          alignItems: 'center',
          textAlign:'center',
          backgroundColor:'#FFFFFF',
          padding:10,
          borderRadius:20,
          marginVertical:5,
          zIndex:-1,
          width:"20%",
          height:45,
         //shadow properties
         shadowColor:'#000',
         shadowOffset:{
          width:0,
          height:2
         },
         shadowOpacity:0.5,
         shadowRadius: 3.84,
         elevation: 5,
        },
        WalletbankImage: {
          maxWidth:30,
          paddingLeft:15,
          paddingRight:15,
          height: 25,
          margin: 15,
          flexDirection:'row',
          borderRadius:15,

          

        },
        WalletrowContainer: {
          flexDirection: 'row',
          gap:20,
          paddingBottom:40,
          flexWrap:'wrap',
          alignItems: 'center',
          justifyContent: 'center',
        },
        WalletcontinueButton: {
          backgroundColor: '#7F3DFF',
          borderRadius: 8,
          paddingVertical: 15,
          marginHorizontal: 16,
          alignItems: 'center',
       
          marginBottom: 20,
        },
        WalletcontinueButtonText: {
          color: '#FFFFFF',
          fontSize: 18,
        },
         // <------------------------Wallet End---------------------------------------------------->
        
        // <-------------------------Setok Start-------------------------------------------------->
         Setcontainer: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor:'#FFFFFF'
        },
        setimage: {
          width: 128,
          height: 128,
        },
        set1: {
          fontSize: 24,
          fontWeight: '500',
          marginTop: 16,
        },

        // Budget Empty Start
        // <-------------------------Setok End-------------------------------------------------->

       // <-------------------------BudgetEmpty Start-------------------------------------------------->
       Emptycontainer: {
        flex: 1,
        backgroundColor: '#7F3DFF',
        justifyContent: 'center',
    },
    Emptyheader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        top: 30,
        padding: 20,
        textAlign: 'center',
        alignItems: 'center',
    },
    Emptymonth: {
        fontSize: 23,
        color: '#ffffff',
    },
    Emptyicons: {
        fontSize: 22,
        color: '#ffffff',
    },
    Emptybody: {
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        top: 70,
        flex: 1,
        padding: 20,
        borderTopLeftRadius: 24,
        borderTopRightRadius: 24,
    },
    Emptybody1: {
        alignItems: 'center',
        textAlign: 'center'
    },
    Emptylet: {
        fontSize: 18,
        color: '#91919f',
    },
    Emptybutton: {
        backgroundColor: '#7f3dff',
        width: '100%',
        position: 'absolute',
        bottom: 120,
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 20,
        borderRadius: 20,
     },
    EmptybuttonText: {
        textAlign: 'center',
        fontSize: 17,
        color: '#FFFFFF',
        fontWeight: '600',
    },
       // <-------------------------BudgetEmpty End-------------------------------------------------->


       // <------------------------- Create_budget Start-------------------------------------------------->
       Create_budgetcontainer: {
        flex: 1,
        backgroundColor: '#7F3DFF',
    },
    Create_budgetheader: {
        flexDirection: 'row',
        marginVertical: 44,
        padding: 16,
        gap: 76,
    },
    Create_budgetleft: {
        fontSize: 20,
        color: '#fff',
        alignItems: 'center',
        textAlign: 'center'
    },
    Create_budgetheadertext: {
        color: '#fff',
        paddingHorizontal: 40,
        fontSize: 18,
    },
    Create_budgetspend: {
        top: 100,
        marginVertical: 100,
        opacity: 0.6,
        fontSize: 18,
        color: '#fcfcfc'
    },
    Create_budgetamount: {
        paddingHorizontal: 20,
        paddingVertical: 60
    },
    Create_budgetamount1: {
        fontSize: 64,
        color: '#fff',
    },
    Create_budgetbottom: {
        backgroundColor: '#ffffff',
        flex: 1,
        padding: 20,
        borderTopLeftRadius: 32,
        borderTopRightRadius: 32,
        gap:10,
        height:'auto'
        
    },
    Create_budgetdropdown: {
        paddingVertical: 15,
        gap: 16,
        borderColor: '#808080',
        borderWidth: 0.5,
        padding: 10,
        borderRadius: 10,
    },
    Create_budgeticon: {
        marginRight: 8,
    },
    Create_budgetplaceholderStyle: {
        fontSize: 19,
        color: '#808080'
    },
    Create_budgetselectedTextStyle: {
        fontSize: 16,
    },
    Create_budgetinputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    Create_budgeticonStyle: {
        width: 35,
        height: 35,
    },
    Create_budgettoogle: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        letterSpacing: 1,
        marginBottom:50,
        
    },  
    Create_budgetalert: {
        fontSize: 18,
        color: '#000',
    },
    Create_budgetalert1: {
        fontSize: 15,
        color: '#808080',
    },
    Create_budgetswitch: {
        marginHorizontal: 5,
        marginVertical: 5,
    },
    Create_budgetslider: {
        paddingVertical: 75,
        position: 'absolute',
    },
    Create_budgetbutton: {
        backgroundColor: '#7f3dff',
        width: '100%',
        paddingVertical: 20,
        marginHorizontal: 20,
        position: 'absolute',
        borderRadius: 20,
        bottom: 20,
    },
    Create_budgetbuttonText: {
        textAlign: 'center',
        fontSize: 16,
        color: '#fff',
        fontWeight:'600'
    },
       // <------------------------- Create_budget End-------------------------------------------------->

        // <------------------------- BudgerAfter Start-------------------------------------------------->
        Budgetcontainer: {
          flex: 1,
          backgroundColor: '#7F3DFF',
          justifyContent: 'center',
      },
      Budgetheader: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          top: 50,
          padding: 20,
          textAlign: 'center',
          alignItems: 'center',
      },
      Budgetmonth: {
          fontSize: 23,
          color: '#ffffff',
      },
      Budgeticons: {
          fontSize: 22,
          color: '#ffffff',
      },
      Budgetbody: {
          backgroundColor: '#fcfcfc',
          top: 70,
          flex: 1,
          borderTopLeftRadius: 24,
          borderTopRightRadius: 24,
          padding: 10,
      },
      Budgetcard1: {
          backgroundColor: '#FFF',
          height: 200,
          padding: 16,
          borderRadius: 16,
      },
      Budgetbody1: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
      },
      Budgetshopping: {
          backgroundColor: '#f5f5f5',
          padding: 5,
          borderRadius: 50,
          fontSize: 16,
          width: 110,
          height: 35,
          textAlign: 'center'
      },
      Budgetdot: {
          fontSize: 15,
          color: '#ffa500',
      },
      Budgetbody11: {
          // paddingLeft: 12,
          // position: 'absolute',
          paddingVertical: 15,
          // padding: 15
          
      },
      BudgetRemaining: {
          fontSize: 22,
          fontWeight: 'bold'
      },
      Budgetslider: {
          width: 350,
          top: 5,
      },
      Budgetamount: {
          top: 0,
          fontSize: 16,
          color: '#808080'
      },
      Budgetlimit: {
          fontSize: 16,
          color: '#ff0000',
          paddingVertical: 8
      },
  
      Budgetcard2: {
          backgroundColor: '#FFF',
          padding: 16,
          gap: 8,
          borderRadius: 16,
          marginVertical: 10,
      },
      Budgetbody2: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
      },
      Budgettransport: {
          backgroundColor: '#f5f5f5',
          padding: 5,
          borderRadius: 50,
          fontSize: 16,
          width: 150,
          height: 35,
          textAlign: 'center'
      },
      Budgetdot1: {
          fontSize: 15,
          color: '#0077ff',
      },
      Budgetline1: {
          width: 346,
          height: 12,
          backgroundColor: '#0000FF',
          borderRadius: 30,
          top: 5,
      },
      Budgetbutton: {
          backgroundColor: '#7f3dff',
          width: '100%',
          bottom: 90,
          position: 'absolute',
          borderRadius: 20,
          padding: 20,
          paddingVertical: 20,
          marginHorizontal: 10
      },
      BudgetbuttonText: {
          textAlign: 'center',
          fontSize: 16,
          color: '#fff',
          fontWeight:'600',
      },
       // <-------------------------BudgerAfter End-------------------------------------------------->

        // <-------------------------Detail_budget Start-------------------------------------------------->
        Detail_budgetcontainer: {
          flex: 1,
          padding: 20,
          backgroundColor:'#ffffff',
      },
      Detail_budgetheader: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 50,
          textAlign: 'center',
          alignItems: 'center',
         
      },
      Detail_budgetheadertext: {
          color: '#000',
          fontSize: 20,
      },
      Detail_budgeticons: {
          fontSize: 20,
          color: '#000',
      },
      Detail_budgetshopkart: {
          alignItems: 'center',
          justifyContent:'center',
          width:'100%',
          
      },
      Detail_budgetshopping: {
          backgroundColor: '#fcfcfc',
          borderRadius: 50,
          fontSize: 18,
          textAlign: 'center',
          paddingVertical: 15,
          paddingHorizontal: 25,
          borderColor:'lightgrey',
          borderWidth:1,
      },
      Detail_budgetbag: {
          fontSize:20,
          color: '#fcac12',
        
      },
      Detail_budgetRemainamount: {
          alignItems: 'center',
          marginVertical: 50,
      },
      Detail_budgetRemaining1: {
          fontSize: 28,
          fontWeight: 'bold',
          textAlign: 'center',
          alignItems: 'center'
      },
      Detail_budgetamnt: {
          fontSize: 80,
          fontWeight: 'bold',
          marginHorizontal: 50
      },
      Detail_budgetslider: {
           bottom: 20,
          justifyContent: 'center',
          marginHorizontal: 10
      },
      Detail_budgetamount: {
          marginHorizontal:0,
          marginVertical:10
          
      },
      limitTextofdetail:{
       fontSize:18,
       color:"#ffffff",
       marginLeft:10
      },
      Detail_budgetlimit: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        paddingVertical:10,
        paddingHorizontal:60,
        borderRadius: 50,
      },
      Detail_budgetbutton: {
          backgroundColor: '#7f3dff',
          width: '100%',
          position: 'absolute',
          borderRadius: 20,
          paddingVertical: 20,
          marginHorizontal: 20,
          bottom: 20,
      },
      Detail_budgetbuttonText: {
          textAlign: 'center',
          alignItems: 'center',
          fontSize: 16,
          color: '#fff',
          fontWeight:'600'
      },
       // <-------------------------Detail_budget  End-------------------------------------------------->

        // <------------------------- Edit_Budjet Start-------------------------------------------------->
        Edit_Budgetcontainer: {
          flex: 1,
          backgroundColor: '#7F3DFF',
      },
      Edit_Budgetheader: {
          flexDirection: 'row',
          marginVertical: 44,
          padding: 16,
          gap: 76,
      },
      Edit_Budgetleft: {       
          fontSize: 20,
          color: '#fff',
          alignItems: 'center',
          textAlign: 'center'
      },
      Edit_Budgetheadertext: {
          color: '#fff',
          paddingHorizontal: 40,
          fontSize: 18,
      },
      Edit_Budgetamount:{ 
          paddingHorizontal: 26,
          paddingVertical: 50  
      },
      Edit_Budgetspend: {
          top: 100,
          marginVertical: 100,
          opacity: 0.6,
          fontSize: 18,
          color: '#fcfcfc'
      },
      Edit_Budgetamount1: {
          fontSize: 64,
          color: '#fff',
          
      },
      Edit_Budgetamount2: {
          fontSize: 64,
          color: '#fff',
          width: 200,
          height: 77,
      },
      Edit_Budgetbottom: {
          backgroundColor: '#fff',
          flex: 1,
          padding: 20,
          borderTopLeftRadius: 32,
          borderTopRightRadius: 32,
          gap: 10,
      },
      Edit_Budgetdropdown: {
          paddingVertical: 15,
          gap: 16,
          borderColor: '#808080',
          borderWidth: 0.5,
          padding: 10,
          borderRadius: 10,
      },
      Edit_Budgeticon: {
          marginHorizontal: 8,
      },
      Edit_BudgetplaceholderStyle: {
          fontSize: 19,
          color: '#808080'
      },
      Edit_BudgetselectedTextStyle: {
          fontSize: 16,
      },
      Edit_BudgeticonStyle: {
          width: 35,
          height: 35,
      },
      Edit_BudgetinputSearchStyle: {
          height: 40,
          fontSize: 16,
      },
      Edit_Budgettoogle: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 10,
          letterSpacing: 1
      },
      Edit_Budgetalert: {
          fontSize: 18,
          color: '#000',
      },
      Edit_Budgetalert1: {
          fontSize: 15,
          color: '#808080',
      },
      Edit_Budgetswitch: {
          marginHorizontal: 5,
          marginVertical: 5,
      },
      Edit_Budgetslider: {
          paddingVertical: 75,
          position: 'absolute',
      },
      Edit_Budgetbutton: {
          backgroundColor: '#7f3dff',
          width: '100%',
          paddingVertical: 20,
          marginHorizontal: 20,
          position: 'absolute',
          borderRadius: 20,
          bottom: 20,
      },
      Edit_BudgetbuttonText: {
          textAlign: 'center',
          fontSize: 16,
          color: '#fff',
          fontWeight:'600'
      },
       // <------------------------- Edit_Budget End-------------------------------------------------->

        // <-------------------------Remove_budget Start-------------------------------------------------->
        Remove_budgetcontainer: {
          flex: 1,
          padding: 20
      },
      Remove_budgetheader: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 50,
          textAlign: 'center',
          alignItems: 'center',
      },
      Remove_budgetheadertext: {
          color: '#000',
          fontSize: 20,
      },
      Remove_budgeticons: {
          fontSize: 20,
          color: '#000',
      },
      Remove_budgetshopkart: {
          alignItems: 'center'
      },
      Remove_budgetshopping: {
          backgroundColor: '#d3d3d3',
          borderRadius: 50,
          fontSize: 22,
          textAlign: 'center',
          paddingVertical: 15,
          paddingHorizontal: 15
      },
      Remove_budgetbag: {
          fontSize: 22,
          color: '#ffa500',
          fontWeight: 'bold',
      },
      Remove_budgetRemainamount: {
          alignItems: 'center',
          marginVertical: 50,
      },
      Remove_budgetRemaining1: {
          fontSize: 28,
          fontWeight: 'bold',
          textAlign: 'center',
          alignItems: 'center'
      },
      Remove_budgetamnt: {
          fontSize: 80,
          fontWeight: 'bold',
          marginHorizontal: 50
      },
      Remove_budgetslider: {
          width: 346,
          bottom: 20,
          marginHorizontal: 10
      },
      Remove_budgetamount: {
          marginHorizontal: 20,
      },
      Remove_budgetlimit: {
          color: '#fff',
          marginVertical: 10,
          width: 290,
          fontSize: 20,
          textAlign: 'center',
          alignItems:'center',
          padding: 10,
          borderRadius: 50,
      },
      Remove_budgetbutton: {
          backgroundColor: '#7f3dff',
          width: '100%',
          position: 'absolute',
          borderRadius: 20,
          paddingVertical: 20,
          marginHorizontal: 20,
          bottom: 20,
      },
      Remove_budgetbuttonText: {
          textAlign: 'center',
          fontSize: 16,
          color: '#fff',
          fontWeight:'600'
      },
       // <-------------------------Remove_budget End-------------------------------------------------->
     
        AppTABHomecontainer: {
          flex: 1,
          backgroundColor: '#ffffff'
        },
        AppTABHomeThreeSectionsJoin: {
          backgroundColor: '#fdf7eb',
          borderBottomRightRadius: 45,
          borderBottomLeftRadius: 45
        },
        AppTABHometopSection: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          paddingHorizontal: 20,
          paddingTop: 30
        },
        AppTABHomeprofileImage: {
          width: 50,
          height: 50,
          borderRadius: 25,
          borderWidth: 2,
          borderColor: '#ad00ff'
        },
        AppTABHometextDrop: {
          fontSize: 20,
          marginRight: 30,
          backgroundColor: '#fdf7ea',
          borderWidth: 1,
          paddingVertical: 10,
          paddingHorizontal: 20,
          borderColor: '#f1f1fa',
          borderRadius: 20,
        },
        AppTABHomeuserBell: {
          fontSize: 25,
          color: '#7f3dff'
        },
        AppTABHomesecondSection: {
          paddingHorizontal: 20,
          paddingTop: 10,
          alignItems: 'center',
          gap: 7,
        },
        AppTABHomeincomeexpenses: {
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          gap: 10,
          width: '100%',
          paddingHorizontal: 30,
          paddingVertical: 20
      
        },
        AppTABHomeincomeIcon: {
          fontSize: 40,
          color: '#00a86b',
          backgroundColor: '#ffffff',
          borderRadius: 20,
          padding: 5
        },
        AppTABHomeexpenseIcon: {
          fontSize: 40,
          color: '#fd3c4a',
          backgroundColor: '#ffffff',
          borderRadius: 20,
          padding: 5
        },
        AppTABHomeincomeCard: {
          width: '50%',
          backgroundColor: '#00a86b',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 18,
          padding: 13,
          borderRadius: 30,
        },
        AppTABHomeexpensesCard: {
          width: '50%',
          backgroundColor: '#fd3c4a',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'row',
          gap: 18,
          padding: 13,
          borderRadius: 30,
        },
        AppTABHomeincomeCardIncome: {
          fontSize: 15,
          fontWeight: '500',
          color: '#ffffff'
        },
        AppTABHomeincomeCardMoney: {
          fontSize: 25,
          fontWeight: '500',
          color: '#ffffff'
        },
        AppTABHomeexpensesCardExpense: {
          fontSize: 15,
          fontWeight: '500',
          color: '#ffffff'
        },
        AppTABHomeexpensesCardMoney: {
          fontSize: 25,
          fontWeight: '500',
          color: '#ffffff'
        },
        AppTABHomebalanceText: {
          fontSize: 18,
          color: '#91919f',
          fontWeight: '500'
        },
        AppTABHomebalanceAmount: {
          fontSize: 40,
          fontWeight: '700'
        },
        AppTABHomethirdSection: {
          paddingHorizontal: 0,
          paddingTop: 20,
        },
        AppTABHomespendFrequencyText: {
          fontSize: 20,
          fontWeight: '500',
          paddingHorizontal: 20,
        },
        AppTABHomefourthSection: {
          flexDirection: 'row',
          justifyContent: 'space-around',
          marginTop: 20,
        },
        AppTABHomeperiodButton: {
          fontSize: 16,
          paddingHorizontal: 15,
          paddingVertical: 5,
          borderRadius: 20,
        },
        AppTABHomeRecentTransaction: {
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 30,
          paddingVertical: 20
        },
        AppTABHomeRecentTransactionText: {
          fontSize: 20,
          fontWeight: '500',
        },
        AppTABHomeRecentTransactionSeeAll: {
          fontSize: 16,
          backgroundColor: '#eee5ff',
          paddingHorizontal: 15,
          paddingVertical: 5,
          borderRadius: 20,
          color: '#7f3dff'
        },
        AppTABHomelistTransaction: {
          backgroundColor: '#fcfcfa',
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          paddingVertical: 15,
          borderRadius: 30,
        },
        AppTABHomeiconwithlabdes: {
          flexDirection: 'row',
          gap: 10
        },
        AppTABHomeTransactionIcon: {
          color: '#00a86b',
          backgroundColor: '#ffffff',
          borderRadius: 20,
          padding: 5,
          borderColor: '#f1f1fa',
          borderWidth: 1
        },
        AppTABHomeshopping: {
          fontSize: 45,
          color: '#fcac12',
        },
        AppTABHomenote: {
          fontSize: 45,
          color: '#7f3dff',
        },
        AppTABHomefood: {
          fontSize: 45,
          color: '#fd3c4a',
        },
        AppTABHomeTransactionLabDes: {
          gap: 5,
        },
        AppTABHomeTransactionLable: {
          fontSize: 20,
          color: '#000000'
        },
        AppTABHomeTransactionDescription: {
          color: '#91919f',
          fontSize: 16,
        },
        AppTABHomeTransactionMoneyTime: {
          gap: 5,
        },
        AppTABHomeTransactionMoney: {
          fontSize: 20,
          color: '#fd3c4a'
        },
        AppTABHomeTransactionTime: {
          color: '#91919f',
          fontSize: 16,
        }
    
      
        // <------------------------- AppTABHome Start-------------------------------------------------->

       // <------------------------- AppTABHome  End-------------------------------------------------->
       // <------------------------- Start-------------------------------------------------->
       // <------------------------- End-------------------------------------------------->
       // <------------------------- Start-------------------------------------------------->
       // <------------------------- End-------------------------------------------------->
       // <------------------------- Start-------------------------------------------------->
       // <------------------------- End-------------------------------------------------->
       // <------------------------- Start-------------------------------------------------->
       // <------------------------- End-------------------------------------------------->

   
   
   
   
     


  });