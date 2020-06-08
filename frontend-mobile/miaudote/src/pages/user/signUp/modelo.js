<Container>
				{/* <HeaderDecoration>
						<View style={styles.OvalShapeView, {borderBottomEndRadius:'100%'}}></View>
				</HeaderDecoration> */}
				<MainContainer>
					<Header>
						<Head style={{backgroundColor:'#ccc7'}}>
							<TittleBlack style={{marginRight:20}}>Crie sua conta</TittleBlack>	
							<Image style={{height:40,width:40, bottom:3}} source={require('../../../assets/user-account.png')}></Image>
						</Head>

						<DivProgressBar style={{justifyContent:'space-evenly'}}>
							<ActiveStepIconColor/>
							<DesabledStepIconColor/>
							<DesabledStepIconColor/>
							<DesabledStepIconColor/>
						</DivProgressBar>

					</Header>

					<Body>
						<SubtittleContainer style={{height: 30}}>
							<SecundaryTittle style={{fontWeight:'bold', color:'#5A6978'}}>Informações Básicas:</SecundaryTittle>
						</SubtittleContainer>
					</Body>

					<Footer>

					</Footer>
        </MainContainer>
</Container>
