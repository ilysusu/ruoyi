package com.ruoyi.quartz.task;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Component;

import java.time.LocalDate;

@Component
public class MyTask {
  private static final Logger log = LoggerFactory.getLogger(MyTask.class);
  
  public void myTestPrintSymTime() {
    log.info("MyTask.myTestPrintSymTime()"+ System.currentTimeMillis());
    System.out.println("定时任务开始执行"+ LocalDate.now());
  }
}
