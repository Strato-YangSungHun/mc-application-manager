package kr.co.mcmp.manifest;

import kr.co.mcmp.manifest.k8s.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.io.IOException;

@Service
public class K8SDeployService{
	
	private static Logger logger = LoggerFactory.getLogger(K8SDeployService.class);

	@Autowired
	private K8SDeployYamlGenerator deployYamlGenerator;



	
}
